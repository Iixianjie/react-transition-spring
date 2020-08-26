import React from 'react';
import { config, SpringBaseProps } from 'react-spring';

import TransitionBase from './transition-base';

import { TransitionProps } from './type';

interface TransitionConfigItem {
  from: any;
  to: any;
  config?: SpringBaseProps['config'];
  skipFade?: boolean;
  interpolater?: (styleProps: any, toggle: boolean) => any;
}

interface TransitionConfigsType {
  [key: string]: TransitionConfigItem;
}

/* !这里的类型需要与./type.ts中的TransitionTypes同步 */
const transitionConfigs: TransitionConfigsType = {
  fade: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { ...config.stiff, clamp: true },
    skipFade: true, // 跳过额外注入的fade动画
  },
  zoom: {
    from: { transform: 'scale3d(0.5, 0.5, 0.5)' },
    to: { transform: 'scale3d(1, 1, 1)' },
  },
  punch: {
    from: { transform: 'scale3d(1.5, 1.5, 1.5)' },
    to: { transform: 'scale3d(1, 1, 1)' },
  },
  slideLeft: {
    from: { transform: 'translate3d(-100%, 0, 0)' },
    to: { transform: 'translate3d(0%, 0, 0)' },
  },
  slideRight: {
    from: { transform: 'translate3d(100%, 0, 0)' },
    to: { transform: 'translate3d(0%, 0, 0)' },
  },
  slideTop: {
    from: { transform: 'translate3d(0, -100%, 0)' },
    to: { transform: 'translate3d(0%, 0%, 0)' },
  },
  slideBottom: {
    from: { transform: 'translate3d(0, 100%, 0)' },
    to: { transform: 'translate3d(0, 0%, 0)' },
  },
  bounce: {
    from: { transform: 'scale3d(0, 0, 0)' },
    to: { transform: 'scale3d(1, 1, 1)' },
    config: { ...config.wobbly },
  },
};

const Transition: React.FC<TransitionProps> = ({ type, alpha = true, ...props }) => {
  let {
    /* eslint-disable-next-line */
    from, to, interpolater, config, skipFade
  } = transitionConfigs[type];

  /* skipFade用于内部配置, alpha配置给用户对fade进行开关 */
  if (alpha && !skipFade) {
    from = { ...from, ...transitionConfigs.fade.from };
    to = { ...to, ...transitionConfigs.fade.to };
  }

  return (
    /* 原样传入props，config与动画配置中的进行合并 */
    <TransitionBase
      {...props}
      config={{ ...config, ...props.config }}
      from={from}
      to={to}
      interpolater={interpolater}
    />
  );
};

export default Transition;
