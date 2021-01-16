import React, { useState, useEffect } from 'react';

import { animated, useSpring } from 'react-spring';
import { useSelf } from '@lxjx/hooks';

import { TransitionBaseProps } from './type';
import { AnimationResult } from '@react-spring/core';

const TransitionBase: React.FC<TransitionBaseProps> = ({
 toggle,
 from,
 to,
 children,
 tag = 'div',
 appear = true,
 config,
 delay,
 mountOnEnter,
 unmountOnExit,
 changeVisible = true,
 style,
 interpolater,
 onStart,
 onRest,
 reset = false,
 innerRef,
 ...props
}) => {
  const self = useSelf({
    toggle,
    count: 0,
    unmounted: false,
  });

  /* useSpring的某些回调会在卸载后执行，手动标记卸载防止内存泄漏 */
  useEffect(() => () => void (self.unmounted = true), []);

  /* 实现mountOnEnter，unmountOnExit接口 */
  const [mount, setMount] = useState(!mountOnEnter);

  /* 可见性隐藏 */
  const [visibility, setVisibility] = useState(toggle);

  /* 将toggle状态映射到self.toggle, 并处理mountOnEnter/unmountOnExit及changeVisible */
  useEffect(() => {
    self.toggle = toggle;

    if (toggle) {
      ensureMount(() => setMount(toggle));
      !unmountOnExit && changeVisible && ensureMount(() => setVisibility(true));
    }
    // eslint-disable-next-line
  }, [toggle]);

  const [springStyle, set] = useSpring<{}>(() => ({
    from,
    config,
    onStart,
    default: true,
    onRest: resetHandler,
  }));

  function resetHandler(springProps: AnimationResult) {

    onRest && (onRest as any)(springProps);

    /** 除了初次渲染以外的所有toggle为false且设置了unmountOnExit的情况都执行卸载 */
    if (!self.toggle && unmountOnExit) {
      ensureMount(() => setMount(false));
    }

    /** 结束后对设置changeVisible的进行隐藏 */
    if (!self.toggle && changeVisible && !unmountOnExit) {
      ensureMount(() => setVisibility(false));
    }
  }

  // 确保执行的状态设置方法所在环境未卸载
  function ensureMount(cb: Function) {
    !self.unmounted && cb();
  }

  /* toggle或动画配置变更，更新动画状态 */
  useEffect(() => {
    const isFirst = self.count === 0;

    if (toggle) {
      set({
        to,
        from,
        delay,
        reset,
        onStart,
        onRest: resetHandler,
        /* 根据appear和self.count判断是否是初次渲染并决定是否启用动画 */
        immediate: appear ? false : isFirst,
        default: true,
      });
    } else {
      set({
        to: from, reset, onStart, onRest: resetHandler, from: to, delay, immediate: isFirst || false /* 首次加载就为false时，跳过动画 */,
      });
    }

    self.count++; // 标记元素动画次数
    // eslint-disable-next-line from to 需要对引用进行memo，防止不必要的触发回调
  }, [from, to, toggle]);

  const AnimatedEl = animated[tag as 'div'];
  AnimatedEl.displayName = 'TransitionBaseNode';

  /* 存在插值器则先走插值器 */
  const springProps = interpolater ? interpolater(springStyle, !!toggle) : springStyle;

  /* 可见性隐藏 */
  const visibleStyle = (changeVisible && !unmountOnExit) ? { display: visibility ? undefined : 'none' } : {};

  return mount
    ? (
      <AnimatedEl { ...props } style={ { ...style, ...springProps, ...visibleStyle } } ref={ innerRef }>
        { typeof children === 'function' ? children(springProps) : children }
      </AnimatedEl>
    )
    : null;
};

export default TransitionBase;
