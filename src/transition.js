import React from 'react';
import PropTypes from 'prop-types';
import { config } from 'react-spring';
import TransitionBase from './transition-base';
import { defaultProps, propsTypes } from './prop-types';
/* !这里的类型需要与./type.ts中的TransitionTypes同步 */
const transitionConfigs = {
    fade: {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { ...config.stiff, clamp: true },
        skipFade: true,
        changeVisible: true,
    },
    zoom: {
        from: { transform: 'scale3d(0, 0, 0)' },
        to: { transform: 'scale3d(1, 1, 1)' },
    },
    punch: {
        from: { transform: 'scale3d(1.5, 1.5, 1.5)' },
        to: { transform: 'scale3d(1, 1, 1)' },
        changeVisible: true,
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
        to: { x: 1 },
        from: { x: 0 },
        skipFade: true,
        changeVisible: true,
        interpolater({ x, ...props }, toggle) {
            const interp = x
                .interpolate({
                range: [0, 0.4, 0.6, 0.8, 0.9, 1],
                output: [0, 1.2, 0.8, 1.1, 0.9, 1],
            })
                .interpolate((_x) => `scale3d(${_x},${_x},${_x})`);
            return {
                ...props,
                transform: toggle ? interp : x.interpolate((_x) => `scale3d(${_x},${_x},${_x})`),
            };
        },
    },
};
const Transition = ({ type, alpha, ...props }) => {
    let { 
    /* eslint-disable-next-line */
    from, to, interpolater, config, skipFade, changeVisible } = transitionConfigs[type];
    /* skipFade用于内部配置, alpha配置给用户对fade进行开关 */
    if (alpha && !skipFade) {
        from = { ...from, ...transitionConfigs.fade.from };
        to = { ...to, ...transitionConfigs.fade.to };
    }
    return (
    /* 原样传入props，config与动画配置中的进行合并 */
    React.createElement(TransitionBase, Object.assign({}, props, { config: { ...config, ...props.config }, from: from, to: to, changeVisible: !!changeVisible, interpolater: interpolater })));
};
Transition.defaultProps = {
    ...defaultProps,
    alpha: true,
};
Transition.propTypes = {
    ...propsTypes,
    type: PropTypes.oneOf(Object.keys(transitionConfigs)).isRequired,
    alpha: PropTypes.bool,
};
export default Transition;
//# sourceMappingURL=transition.js.map