import PropTypes from 'prop-types';
declare const defaultProps: {
    mountOnEnter: boolean;
    unmountOnExit: boolean;
    changeVisible: boolean;
    tag: string;
    appear: boolean;
};
declare const propsTypes: {
    mountOnEnter: PropTypes.Requireable<boolean>;
    unmountOnExit: PropTypes.Requireable<boolean>;
    tag: PropTypes.Requireable<string>;
    toggle: PropTypes.Requireable<boolean>;
    appear: PropTypes.Requireable<boolean>;
    onStart: PropTypes.Requireable<(...args: any[]) => any>;
    onRest: PropTypes.Requireable<(...args: any[]) => any>;
    config: PropTypes.Requireable<object>;
    delay: PropTypes.Requireable<number>;
    changeVisible: PropTypes.Requireable<boolean>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
};
export { defaultProps, propsTypes, };
