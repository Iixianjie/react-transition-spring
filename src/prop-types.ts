import PropTypes from 'prop-types';

const defaultProps = {
  mountOnEnter: false,
  unmountOnExit: false,
  changeVisible: false,
  tag: 'div',
  appear: true,
};

const propsTypes = {
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
};

export {
  defaultProps,
  propsTypes,
};
