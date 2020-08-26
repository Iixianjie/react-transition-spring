import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { animated, useSpring } from 'react-spring';
import { useSelf } from '@lxjx/hooks';

import { TransitionBaseProps } from './type';
import { defaultProps, propsTypes } from './prop-types';

const TransitionBase: React.FC<TransitionBaseProps> = ({
   toggle,
   from,
   to,
   children,
   tag,
   appear,
   config,
   delay,
   mountOnEnter,
   unmountOnExit,
   changeVisible,
   style,
   interpolater,
   onStart,
   onRest,
   reset = false,
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

  const [springStyle, set] = useSpring(() => ({
    from,
    config,
    reset,
    onStart() {
      onStart && onStart();
    },
    onRest(springProps) {
      onRest && onRest(springProps);
      /* 动画结束且配置了unmountOnExit，移除元素 */
      /* 当初次渲染且设置了mountOnEnter时，阻止渲染 */
      const isFirstMountAndOnEnter = self.count <= 1 && !mountOnEnter;

      if (!self.toggle && unmountOnExit && !isFirstMountAndOnEnter) {
        setMount(false);
      }

      /* 结束后对设置changeVisible的进行隐藏 */
      if (!self.toggle && changeVisible) {
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

  /* 将toggle状态映射到self.toggle, 并处理mountOnEnter/unmountOnExit及changeVisible */
  useEffect(() => {
    self.toggle = toggle;
    if (toggle) {
      setMount(toggle);
      changeVisible && setVisibility(true);
    }
    // eslint-disable-next-line
  }, [toggle]);

  // @ts-ignore
  const AnimatedEl = animated[tag];
  AnimatedEl.displayName = 'TransitionNode';

  /* 存在插值器则先走插值器 */
  const springProps = interpolater ? interpolater(springStyle, !!toggle) : springStyle;
  /* 隐藏 */
  const visibleStyle = changeVisible ? { display: visibility ? '' : 'none' } : {};

  return (
    (mount)
      ? (
        <AnimatedEl {...props} style={{ ...style, ...springProps, ...visibleStyle }}>
          { typeof children === 'function' ? children(springProps) : children }
        </AnimatedEl>
      )
      : null
  );
};

TransitionBase.defaultProps = defaultProps;
TransitionBase.propTypes = {
  ...propsTypes,
  interpolater: PropTypes.func,
  from: PropTypes.any.isRequired,
  to: PropTypes.any.isRequired,
};

export default TransitionBase;
