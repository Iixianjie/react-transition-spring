import React from 'react';
import { SpringBaseProps } from 'react-spring';
import { Assign } from 'utility-types';
interface Base {
    /** 开关动画 */
    toggle?: boolean;
    /** 初次加载时是否触发动画, 默认为true */
    appear?: boolean;
    /** 包裹元素的tag类型，默认为div, 必须是合法的html元素类型(注意当为span等内联元素时transform不会生效，需要手动切换为块类型) */
    tag?: string;
    /** 动画开始前的延迟时间 */
    delay?: number;
    /** spring动画配置 */
    config?: SpringBaseProps['config'];
    /** 所有动画结束后, 接收动画结束后的动画值 */
    onRest?: (transitionArg: any) => void;
    /** 动画开始 */
    onStart?: () => void;
    /** 默认情况下动画结束后组件依然会保持挂载，设置此属性在过渡结束后会卸载组件，默认为false */
    unmountOnExit?: boolean;
    /** 初次渲染时，组件默认会以from状态先加载，为true时，只有在初次触发动画时才会加载组件，默认为false */
    mountOnEnter?: boolean;
    /** 包裹组件的类名 */
    className?: string;
    /** 包裹组件样式 */
    style?: React.CSSProperties;
}
interface TransitionBaseExt {
    /** 动画的enter -> leave 状态 */
    to: any;
    /** 动画的leave -> enter 状态 */
    from: any;
    /** 用于插值动画，在动画属性传递给动画元素前会将即将用于动画的style和当前的toggle状态传入并返回新的动画对象 */
    interpolater?: (props: any, toggle: boolean) => any;
    /** 根据toggle改变元素的visibility属性, 用于对不想卸载掉的元素进行可见性隐藏 */
    changeVisible?: boolean;
    [key: string]: any;
}
export declare type TransitionBaseProps = Assign<Base, TransitionBaseExt>;
export declare type TransitionTypes = 'fade' | 'zoom' | 'punch' | 'slideLeft' | 'slideRight' | 'slideTop' | 'slideBottom' | 'bounce';
export declare type TransitionProps = Assign<Base, {
    /** 动画类型 */
    type: TransitionTypes;
    /** 默认会为所有类型的过渡附加fade过渡，如果需要禁用，为此项传递false */
    alpha?: boolean;
    [key: string]: any;
}>;
export {};
