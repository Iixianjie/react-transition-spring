import React, { useState, useEffect } from 'react';

import { animated, useSpring } from 'react-spring';
import { useSelf } from '@lxjx/hooks';

import { TransitionBaseProps } from './type';

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
  });

  /* 实现mountOnEnter，unmountOnExit接口 */
  const [mount, setMount] = useState(!mountOnEnter);

  /* 可见性隐藏 */
  const [visibility, setVisibility] = useState(toggle);

  /* 将toggle状态映射到self.toggle, 并处理mountOnEnter/unmountOnExit及changeVisible */
  useEffect(() => {
    self.toggle = toggle;

    if (toggle) {
      setMount(toggle);
      !unmountOnExit && changeVisible && setVisibility(true);
    }
    // eslint-disable-next-line
  }, [toggle]);

  const [springStyle, set] = useSpring(() => ({
    from,
    config,
    reset,
    onStart() {
      onStart && onStart();
    },
    onRest(springProps) {

      onRest && onRest(springProps);

      /** 除了初次渲染以外的所有toggle为false且设置了unmountOnExit的情况都执行卸载 */
      if (!self.toggle && unmountOnExit) {
        setMount(false);
      }

      /** 结束后对设置changeVisible的进行隐藏 */
      if (!self.toggle && changeVisible && !unmountOnExit) {
        setVisibility(false);
      }
    },
  }));

  /* toggle或动画配置变更，更新动画状态 */
  useEffect(() => {
    const isFirst = self.count === 0;

    if (toggle) {
      set({
        // @ts-ignore
        to,
        from,
        delay,
        /* 根据appear和self.count判断是否是初次渲染并决定是否启用动画 */
        immediate: appear ? false : isFirst,
      });
    } else {
      // @ts-ignore
      set({ to: from, from: to, immediate: false, delay });
    }

    self.count++; // 标记元素动画次数
    // eslint-disable-next-line from to 需要对引用进行memo，防止不必要的触发回调
  }, [from, to, toggle]);

  const AnimatedEl = animated[tag];
  AnimatedEl.displayName = 'TransitionBaseNode';

  /* 存在插值器则先走插值器 */
  const springProps = interpolater ? interpolater(springStyle, !!toggle) : springStyle;

  /* 可见性隐藏 */
  const visibleStyle = (changeVisible && !unmountOnExit) ? { display: visibility ? undefined : 'none' } : {};

  return mount
    ? (
      // @ts-ignore
      <AnimatedEl { ...props } style={{ ...style, ...springProps, ...visibleStyle }} ref={innerRef}>
        { typeof children === 'function' ? children(springProps) : children }
      </AnimatedEl>
    )
    : null;
};

export default TransitionBase;
