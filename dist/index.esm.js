import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
export * from 'react-spring';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import { useSelf } from '@lxjx/hooks';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TransitionBase = function TransitionBase(_ref) {
  var toggle = _ref.toggle,
      from = _ref.from,
      to = _ref.to,
      children = _ref.children,
      _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'div' : _ref$tag,
      _ref$appear = _ref.appear,
      appear = _ref$appear === void 0 ? true : _ref$appear,
      config = _ref.config,
      delay = _ref.delay,
      mountOnEnter = _ref.mountOnEnter,
      unmountOnExit = _ref.unmountOnExit,
      _ref$changeVisible = _ref.changeVisible,
      changeVisible = _ref$changeVisible === void 0 ? true : _ref$changeVisible,
      style = _ref.style,
      interpolater = _ref.interpolater,
      _onStart = _ref.onStart,
      _onRest = _ref.onRest,
      _ref$reset = _ref.reset,
      reset = _ref$reset === void 0 ? false : _ref$reset,
      innerRef = _ref.innerRef,
      props = _objectWithoutProperties(_ref, ["toggle", "from", "to", "children", "tag", "appear", "config", "delay", "mountOnEnter", "unmountOnExit", "changeVisible", "style", "interpolater", "onStart", "onRest", "reset", "innerRef"]);

  var self = useSelf({
    toggle: toggle,
    count: 0
  });
  /* 实现mountOnEnter，unmountOnExit接口 */

  var _useState = useState(!mountOnEnter),
      _useState2 = _slicedToArray(_useState, 2),
      mount = _useState2[0],
      setMount = _useState2[1];
  /* 可见性隐藏 */


  var _useState3 = useState(toggle),
      _useState4 = _slicedToArray(_useState3, 2),
      visibility = _useState4[0],
      setVisibility = _useState4[1];
  /* 将toggle状态映射到self.toggle, 并处理mountOnEnter/unmountOnExit及changeVisible */


  useEffect(function () {
    self.toggle = toggle;

    if (toggle) {
      setMount(toggle);
      !unmountOnExit && changeVisible && setVisibility(true);
    } // eslint-disable-next-line

  }, [toggle]);

  var _useSpring = useSpring(function () {
    return {
      from: from,
      config: config,
      reset: reset,
      onStart: function onStart() {
        _onStart && _onStart();
      },
      onRest: function onRest(springProps) {
        _onRest && _onRest(springProps);
        /** 除了初次渲染以外的所有toggle为false且设置了unmountOnExit的情况都执行卸载 */

        if (!self.toggle && unmountOnExit) {
          setMount(false);
        }
        /** 结束后对设置changeVisible的进行隐藏 */


        if (!self.toggle && changeVisible && !unmountOnExit) {
          setVisibility(false);
        }
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      springStyle = _useSpring2[0],
      set = _useSpring2[1];
  /* toggle或动画配置变更，更新动画状态 */


  useEffect(function () {
    var isFirst = self.count === 0;

    if (toggle) {
      set({
        // @ts-ignore
        to: to,
        from: from,
        delay: delay,

        /* 根据appear和self.count判断是否是初次渲染并决定是否启用动画 */
        immediate: appear ? false : isFirst
      });
    } else {
      // @ts-ignore
      set({
        to: from,
        from: to,
        immediate: false,
        delay: delay
      });
    }

    self.count++; // 标记元素动画次数
    // eslint-disable-next-line from to 需要对引用进行memo，防止不必要的触发回调
  }, [from, to, toggle]);
  var AnimatedEl = animated[tag];
  AnimatedEl.displayName = 'TransitionBaseNode';
  /* 存在插值器则先走插值器 */

  var springProps = interpolater ? interpolater(springStyle, !!toggle) : springStyle;
  /* 可见性隐藏 */

  var visibleStyle = changeVisible && !unmountOnExit ? {
    display: visibility ? undefined : 'none'
  } : {};
  return mount ? // @ts-ignore
  React.createElement(AnimatedEl, Object.assign({}, props, {
    style: _objectSpread({}, style, {}, springProps, {}, visibleStyle),
    ref: innerRef
  }), typeof children === 'function' ? children(springProps) : children) : null;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* !这里的类型需要与./type.ts中的TransitionTypes同步 */

var transitionConfigs = {
  fade: {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: _objectSpread$1({}, config.stiff, {
      clamp: true
    }),
    skipFade: true
  },
  zoom: {
    from: {
      transform: 'scale3d(0.5, 0.5, 0.5)'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    }
  },
  punch: {
    from: {
      transform: 'scale3d(1.5, 1.5, 1.5)'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    }
  },
  slideLeft: {
    from: {
      transform: 'translate3d(-100%, 0, 0)'
    },
    to: {
      transform: 'translate3d(0%, 0, 0)'
    }
  },
  slideRight: {
    from: {
      transform: 'translate3d(100%, 0, 0)'
    },
    to: {
      transform: 'translate3d(0%, 0, 0)'
    }
  },
  slideTop: {
    from: {
      transform: 'translate3d(0, -100%, 0)'
    },
    to: {
      transform: 'translate3d(0%, 0%, 0)'
    }
  },
  slideBottom: {
    from: {
      transform: 'translate3d(0, 100%, 0)'
    },
    to: {
      transform: 'translate3d(0, 0%, 0)'
    }
  },
  bounce: {
    from: {
      transform: 'scale3d(0, 0, 0)'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    },
    config: _objectSpread$1({}, config.wobbly)
  }
};

var Transition = function Transition(_ref) {
  var type = _ref.type,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === void 0 ? true : _ref$alpha,
      props = _objectWithoutProperties(_ref, ["type", "alpha"]);

  var _transitionConfigs$ty = transitionConfigs[type],
      from = _transitionConfigs$ty.from,
      to = _transitionConfigs$ty.to,
      interpolater = _transitionConfigs$ty.interpolater,
      config = _transitionConfigs$ty.config,
      skipFade = _transitionConfigs$ty.skipFade;
  /* skipFade用于内部配置, alpha配置给用户对fade进行开关 */

  if (alpha && !skipFade) {
    from = _objectSpread$1({}, from, {}, transitionConfigs.fade.from);
    to = _objectSpread$1({}, to, {}, transitionConfigs.fade.to);
  }

  return (
    /* 原样传入props，config与动画配置中的进行合并 */
    React.createElement(TransitionBase, Object.assign({}, props, {
      config: _objectSpread$1({}, config, {}, props.config),
      from: from,
      to: to,
      interpolater: interpolater
    }))
  );
};

export { Transition, TransitionBase };
