import PropTypes from 'prop-types';
const defaultProps = Object.freeze({
    mountOnEnter: false,
    unmountOnExit: false,
    changeVisible: false,
    tag: 'div',
    appear: true,
});
const propsTypes = Object.freeze({
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
    style: PropTypes.object,
});
export { defaultProps, propsTypes, };
//# sourceMappingURL=prop-types.js.map