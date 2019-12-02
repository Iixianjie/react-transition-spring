'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactSpring = require('react-spring');
var hooks = require('@lxjx/hooks');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var defaultProps = {
  mountOnEnter: false,
  unmountOnExit: false,
  changeVisible: false,
  tag: 'div',
  appear: true
};
var propsTypes = {
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.bool,
  appear: PropTypes.bool,
  onStart: PropTypes.func,
  onRest: PropTypes.func,
  config: PropTypes.object,
  delay: PropTypes.number,
  changeVisible: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

var TransitionBase = function TransitionBase(_ref) {
  var toggle = _ref.toggle,
      from = _ref.from,
      to = _ref.to,
      children = _ref.children,
      tag = _ref.tag,
      appear = _ref.appear,
      config = _ref.config,
      delay = _ref.delay,
      mountOnEnter = _ref.mountOnEnter,
      unmountOnExit = _ref.unmountOnExit,
      changeVisible = _ref.changeVisible,
      style = _ref.style,
      interpolater = _ref.interpolater,
      _onStart = _ref.onStart,
      _onRest = _ref.onRest,
      _ref$reset = _ref.reset,
      reset = _ref$reset === void 0 ? false : _ref$reset,
      props = _objectWithoutProperties(_ref, ["toggle", "from", "to", "children", "tag", "appear", "config", "delay", "mountOnEnter", "unmountOnExit", "changeVisible", "style", "interpolater", "onStart", "onRest", "reset"]);

  var self = hooks.useSelf({
    toggle: toggle,
    count: 0
  });
  /* 实现mountOnEnter，unmountOnExit接口 */

  var _useState = React.useState(!mountOnEnter),
      _useState2 = _slicedToArray(_useState, 2),
      mount = _useState2[0],
      setMount = _useState2[1];
  /* 可见性隐藏 */


  var _useState3 = React.useState(toggle),
      _useState4 = _slicedToArray(_useState3, 2),
      visibility = _useState4[0],
      setVisibility = _useState4[1];

  var _useSpring = reactSpring.useSpring(function () {
    return {
      from: from,
      config: config,
      reset: reset,
      onStart: function onStart() {
        _onStart && _onStart();
      },
      onRest: function onRest(springProps) {
        _onRest && _onRest(springProps);
        /* 动画结束且配置了unmountOnExit，移除元素 */

        /* 当初次渲染且设置了mountOnEnter时，阻止渲染 */

        var isFirstMountAndOnEnter = self.count <= 1 && !mountOnEnter;

        if (!self.toggle && unmountOnExit && !isFirstMountAndOnEnter) {
          setMount(false);
        }
        /* 结束后对设置changeVisible的进行隐藏 */


        if (!self.toggle && changeVisible) {
          setVisibility(false);
        }
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      springStyle = _useSpring2[0],
      set = _useSpring2[1];
  /* toggle或动画配置变更，更新动画状态 */


  React.useEffect(function () {
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
    // eslint-disable-next-line
  }, [from, to, toggle]);
  /* 将toggle状态映射到self.toggle用于onRest回调内引用, 并处理mountOnEnter/unmountOnExit及changeVisible */

  React.useEffect(function () {
    self.toggle = toggle;

    if (toggle) {
      setMount(toggle);
      changeVisible && setVisibility(true);
    } // eslint-disable-next-line

  }, [toggle]); // @ts-ignore

  var AnimatedEl = reactSpring.animated[tag];
  AnimatedEl.displayName = 'TransitionNode';
  /* 存在插值器则先走插值器 */

  var springProps = interpolater ? interpolater(springStyle, !!toggle) : springStyle;
  /* 隐藏 */

  var visibleStyle = changeVisible ? {
    display: visibility ? '' : 'none'
  } : {};
  return mount ? React__default.createElement(AnimatedEl, Object.assign({}, props, {
    style: _objectSpread2({}, style, {}, springProps, {}, visibleStyle)
  }), typeof children === 'function' ? children(springProps) : children) : null;
};

TransitionBase.defaultProps = defaultProps;
TransitionBase.propTypes = _objectSpread2({}, propsTypes, {
  interpolater: PropTypes.func,
  from: PropTypes.any.isRequired,
  to: PropTypes.any.isRequired
});

/* !这里的类型需要与./type.ts中的TransitionTypes同步 */

var transitionConfigs = {
  fade: {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: _objectSpread2({}, reactSpring.config.stiff, {
      clamp: true
    }),
    skipFade: true,
    changeVisible: true
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
    },
    changeVisible: true
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
    to: {
      x: 1
    },
    from: {
      x: 0
    },
    skipFade: true,
    changeVisible: true,
    interpolater: function interpolater(_ref, toggle) {
      var x = _ref.x,
          props = _objectWithoutProperties(_ref, ["x"]);

      var interp = x.interpolate({
        range: [0, 0.4, 0.6, 0.8, 0.9, 1],
        output: [0, 1.2, 0.8, 1.1, 0.9, 1]
      }).interpolate(function (_x) {
        return "scale3d(".concat(_x, ",").concat(_x, ",").concat(_x, ")");
      });
      return _objectSpread2({}, props, {
        transform: toggle ? interp : x.interpolate(function (_x) {
          return "scale3d(".concat(_x, ",").concat(_x, ",").concat(_x, ")");
        })
      });
    }
  }
};

var Transition = function Transition(_ref2) {
  var type = _ref2.type,
      alpha = _ref2.alpha,
      props = _objectWithoutProperties(_ref2, ["type", "alpha"]);

  var _transitionConfigs$ty = transitionConfigs[type],
      from = _transitionConfigs$ty.from,
      to = _transitionConfigs$ty.to,
      interpolater = _transitionConfigs$ty.interpolater,
      config = _transitionConfigs$ty.config,
      skipFade = _transitionConfigs$ty.skipFade,
      changeVisible = _transitionConfigs$ty.changeVisible;
  /* skipFade用于内部配置, alpha配置给用户对fade进行开关 */

  if (alpha && !skipFade) {
    from = _objectSpread2({}, from, {}, transitionConfigs.fade.from);
    to = _objectSpread2({}, to, {}, transitionConfigs.fade.to);
  }

  return (
    /* 原样传入props，config与动画配置中的进行合并 */
    React__default.createElement(TransitionBase, Object.assign({}, props, {
      config: _objectSpread2({}, config, {}, props.config),
      from: from,
      to: to,
      changeVisible: !!changeVisible,
      interpolater: interpolater
    }))
  );
};

Transition.defaultProps = _objectSpread2({}, defaultProps, {
  alpha: true
});
Transition.propTypes = _objectSpread2({}, propsTypes, {
  type: PropTypes.oneOf(Object.keys(transitionConfigs)).isRequired,
  alpha: PropTypes.bool
});

Object.keys(reactSpring).forEach(function (key) {
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return reactSpring[key];
    }
  });
});
exports.Transition = Transition;
exports.TransitionBase = TransitionBase;
