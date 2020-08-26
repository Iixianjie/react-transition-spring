<h1 align="center" style="color: #61dafb;">react-transition-spring</h1>

<br>
<br>

## Introduction
react-transition-spring 是基于 react-spring 的一套封装组件，用于简化通过react-spring执行开关动画的方式, 同时, 也扩展了一些非常使用的属性如`unmountOnExit`、`mountOnEnter`。

💡 本库应用于明确知道入场值和离场值的过渡动画(亦称为开关动画), 如果动画需要通过复杂的操作完成(手势等拥有不确定的动画结果的动画)请直接使用react-spring

提供基础组件 `TransitionBase` 以及基于 `TransitionBase` 的上层组件 `Transition`, 内置了一些非常常见的开关动画效果。

## Usage

以下示例介绍了如何使用 `Transition` 和 `TransitionBase` 执行 `fade` 动画

```tsx
import { Transition, TransitionBase } from '@lxjx/react-transition-spring';

const [show, setShow] = useState(false);

return (
    <div style={{ padding: 100 }}>
      <button onClick={() => setShow(prev => !prev)}>toggle</button>
      
      <Transition toggle={show} style={redBox} type="fade">
        <div>动画</div>
      </Transition>

      <TransitionBase toggle={show} style={redBox} to={{ opacity: 1 }} from={{ opacity: 0 }} >
        <div>动画</div>
      </TransitionBase>
    </div>
);
```

## API
**共有配置**

```ts
interface Base {
  /** 控制开关动画 */
  toggle?: boolean;
  /** true | 初次加载时是否触发动画 */
  appear?: boolean;
  /** 'div' | 包裹元素的tag类型。(注意当为span等内联元素时transform不会生效，需要将其设置为inner-block) */
  tag?: keyof typeof animated;
  /** 动画开始前的延迟时间 */
  delay?: number;
  /** react-spring 动画配置 */
  config?: SpringBaseProps['config'];
  /** 所有动画结束后调用, 接收动画结束后的动画值 */
  onRest?: (transitionArg: any) => void;
  /** 动画开始, 会在动画运行、初始化期间多次调用，不应该将其作为进行其他操作的依据 */
  onStart?: () => void;
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
```



**`Transition`**

集成组件，包含一组内置动画，使用更方便

```ts
interface TransitionProps extends Base {
  /** 动画类型 */
  type: TransitionTypes;
  /** true | 为所有类型的动画附加fade过渡，使其视觉效果更平滑 */
  alpha?: boolean;
}

type TransitionTypes =
  | 'fade'
  | 'zoom'
  | 'punch'
  | 'slideLeft'
  | 'slideRight'
  | 'slideTop'
  | 'slideBottom'
  | 'bounce';
```



**`TransitionBase`**

基础组件，自行配置动画值，使用更灵活

```ts
interface TransitionBaseProps extends Base {
  /** 动画的入场状态 */
  to: any;
  /** 动画的离场状态 */
  from: any;
  /** 用于插值动画，在动画属性传递给动画元素前会将即将用于动画的style和当前的toggle状态传入并返回新的动画对象 */
  interpolater?: (props: any, toggle: boolean) => any;
  /** true | 执行完离场动画后对元素进行可见性隐藏, 防止离场元素占用布局空间和触发事件 */
  changeVisible?: boolean;
}
```



## 进阶使用

执行数字动画

```tsx
<TransitionBase
    toggle={toggle}
    className="box"
    tto={{ number: 0 }}
    from={{ number: 100000 }}
    >
    {({ number: number }: any) => number.interpolate((n: any) => n.toFixed(2))}
</TransitionBase>
```























