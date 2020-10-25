import React, { ElementType } from 'react';
import { UseSpringProps, ControllerProps } from 'react-spring';
interface Base {
    /** 控制开关动画 */
    toggle?: boolean;
    /** true | 初次加载时是否触发动画 */
    appear?: boolean;
    /** 'div' | 包裹元素的tag类型。(注意当为span等内联元素时transform不会生效，需要将其设置为inner-block) */
    tag?: ElementType;
    /** 动画开始前的延迟时间 */
    delay?: number;
    /** react-spring 动画配置 */
    config?: UseSpringProps['config'];
    /** 所有动画结束后调用, 接收动画结束后的动画值 */
    onRest?: ControllerProps['onRest'];
    /** 动画开始 */
    onStart?: ControllerProps['onStart'];
    /** false | 默认情况下动画结束后组件依然会保持挂载，设置此属性会在过渡结束后会卸载组件 */
    unmountOnExit?: boolean;
    /** false | 初次渲染时，组件默认会以from状态先加载，为true时，只有在初次触发动画时才会加载组件 */
    mountOnEnter?: boolean;
    /** 包裹元素的类名 */
    className?: string;
    /** 包裹元素样式 */
    style?: React.CSSProperties;
    /** 执行某些`破坏性`(form和to被设置为和前一个值毫无关联的动画值)的动画时，可以设置此项来取消前一个动画造成的影响 */
    reset?: boolean;
    /** 指向根节点的ref, 用于直接操作根节点 */
    innerRef?: any;
    [key: string]: any;
}
export interface TransitionBaseProps extends Base {
    /** 动画的入场状态 */
    to: any;
    /** 动画的离场状态 */
    from: any;
    /** 用于插值动画，在动画属性传递给动画元素前会将即将用于动画的style和当前的toggle状态传入并返回新的动画对象 */
    interpolater?: (props: any, toggle: boolean) => any;
    /** true | 执行完离场动画后对元素进行可见性隐藏, 防止离场元素占用布局空间和触发事件 */
    changeVisible?: boolean;
}
export declare type TransitionTypes = 'fade' | 'zoom' | 'punch' | 'slideLeft' | 'slideRight' | 'slideTop' | 'slideBottom' | 'bounce';
export interface TransitionProps extends Base {
    /** 动画类型 */
    type: TransitionTypes;
    /** true | 为所有类型的动画附加fade过渡，使其视觉效果更平滑 */
    alpha?: boolean;
}
export {};
