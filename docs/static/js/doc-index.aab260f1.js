(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./doc/demo/style.css":function(e,n,t){},"./doc/index.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("react"),r=t.n(o),s=t("./node_modules/@mdx-js/react/dist/index.es.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=t("./src/index.ts"),c=function(){var e=r.a.useState(!1),n=Object(i.a)(e,2),t=n[0],a=n[1];return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button-wrap"},r.a.createElement("button",{type:"button",onClick:function(){a((function(e){return!e}))}},"toggle")),r.a.createElement(l.Transition,{toggle:t,type:"fade",className:"box"},"fade"),r.a.createElement(l.Transition,{toggle:t,type:"zoom",className:"box"},"zoom"),r.a.createElement(l.Transition,{toggle:t,type:"punch",className:"box"},"punch"),r.a.createElement(l.Transition,{toggle:t,type:"bounce",className:"box"},"bounce"),r.a.createElement(l.Transition,{toggle:t,type:"slideLeft",className:"box"},"slideLeft"),r.a.createElement(l.Transition,{toggle:t,type:"slideRight",className:"box"},"slideRight"),r.a.createElement(l.Transition,{toggle:t,type:"slideTop",className:"box"},"slideTop"),r.a.createElement(l.Transition,{toggle:t,type:"slideBottom",className:"box"},"slideBottom"))},b=c;c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Base",filename:"doc\\demo\\base.tsx"}});var p=function(){var e=r.a.useState(!1),n=Object(i.a)(e,2),t=n[0],a=n[1];return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button-wrap"},r.a.createElement("button",{type:"button",onClick:function(){a((function(e){return!e}))}},"toggle")),r.a.createElement(l.TransitionBase,{toggle:t,className:"box",to:{transform:"translate3d(-100%, 0, 0)"},from:{transform:"translate3d(0%, 0, 0)"}},"slideLeft"),r.a.createElement(l.TransitionBase,{toggle:t,className:"box",to:{transform:"scale(0)"},from:{transform:"scale(1)"}},"zoom"),r.a.createElement(l.TransitionBase,{toggle:t,className:"box",to:{number:0},from:{number:1e5}},(function(e){return e.number.interpolate((function(e){return e.toFixed(2)}))})))},m=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Demo1",filename:"doc\\demo\\demo1.tsx"}});var u=function(e){var n=e.children,t=r.a.useState(!0),a=Object(i.a)(t,2),o=a[0],s=a[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"button-wrap"},r.a.createElement("button",{type:"button",onClick:function(){s((function(e){return!e}))}},"toggle")),r.a.createElement("div",null,n(o)))},d=u;u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateComponent",filename:"doc\\demo\\state-component.tsx"}});var g=t("./node_modules/father/node_modules/docz/dist/index.esm.js");t("./doc/demo/style.css");t.d(n,"default",(function(){return O}));var f={},j="wrapper";function O(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)(j,Object.assign({},f,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,"react-transition-spring \u662f\u57fa\u4e8e react-spring \u7684\u4e00\u5957\u5c01\u88c5\u7ec4\u4ef6\uff0cAPI\u7c7b\u4f3c\u4e8e react-transition-group\uff0c\n\u76ee\u7684\u662f\u5bf9 react-spring \u4e00\u4e9b\u5e38\u89c1\u573a\u666f\u7684\u4f7f\u7528\u8fdb\u884c\u7b80\u5316\u4ee5\u53ca\u5bf9unmountOnExit\u3001mountOnEnter\u7b49\u5b9e\u7528API\u63d0\u4f9b\u5f00\u7bb1\u5f0f\u7684\u652f\u6301\u3002"),Object(s.b)("p",null,"\u63d0\u4f9b\u57fa\u7840\u7ec4\u4ef6 TransitionBase \u4ee5\u53ca\u57fa\u4e8e TransitionBase \u7684\u4e0a\u5c42\u7ec4\u4ef6 Transition, \u5185\u7f6e\u4e86\u4e00\u4e9b\u975e\u5e38\u5e38\u89c1\u7684\u5f00\u5173\u52a8\u753b\u6548\u679c\uff0c\n\u4f60\u4e5f\u53ef\u4ee5\u57fa\u4e8eTransitionBase\u5b9e\u73b0\u81ea\u5df1\u7684\u52a8\u753b\u7ec4\u4ef6\uff0c\u67e5\u770b",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/Iixianjie/react-transition-spring/blob/master/src/transition.tsx"}),"transition.tsx"),"\n\u7ec4\u4ef6\u6709\u52a9\u4e8e\u4f60\u4e86\u89e3\u5982\u4f55\u4f7f\u7528\u5b83\u3002"),Object(s.b)("hr",null),Object(s.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"yarn add @lxjx/react-transition-spring\n")),Object(s.b)("p",null,"\u6216"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"npm install @lxjx/react-transition-spring\n")),Object(s.b)("p",null,"\u7136\u540e\u5f15\u5165\u6765\u4f7f\u7528\u5b83\u4eec"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { TransitionBase, Transition } from '@lxjx/react-transition-spring';\n")),Object(s.b)("p",null,"react-transition-spring \u539f\u6837\u5bfc\u51fa\u4e86\u6240\u6709 react-spring \u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u5bfc\u5165\u5b83\u4eec\u5e76\u4f7f\u7528"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { useSpring, config } from '@lxjx/react-transition-spring';\n")),Object(s.b)("hr",null),Object(s.b)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(s.b)(b,{mdxType:"Base"}),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'import React from \'react\';\n\nimport { Transition } from \'@lxjx/react-transition-spring\';\n\nconst Base: React.FC = () => {\n  const [toggle, setToggle] = React.useState(false);\n\n  return (\n    <div className="wrap">\n      <div className="button-wrap">\n        <button\n          type="button"\n          onClick={() => {\n            setToggle(prev => !prev);\n          }}\n        >toggle</button>\n      </div>\n      <Transition toggle={toggle} type="fade" className="box">\n        fade\n      </Transition>\n      <Transition toggle={toggle} type="zoom" className="box">\n        zoom\n      </Transition>\n      <Transition toggle={toggle} type="punch" className="box">\n        punch\n      </Transition>\n      <Transition toggle={toggle} type="bounce" className="box">\n        bounce\n      </Transition>\n      <Transition toggle={toggle} type="slideLeft" className="box">\n        slideLeft\n      </Transition>\n      <Transition toggle={toggle} type="slideRight" className="box">\n        slideRight\n      </Transition>\n      <Transition toggle={toggle} type="slideTop" className="box">\n        slideTop\n      </Transition>\n      <Transition toggle={toggle} type="slideBottom" className="box">\n        slideBottom\n      </Transition>\n    </div>\n  );\n};\n')),Object(s.b)("hr",null),Object(s.b)("h2",{id:"transition"},"Transition"),Object(s.b)("p",null,"\u5982\u4e0a\u9762\u7684\u793a\u4f8b\u6240\u793a\uff0cTransition\u7ec4\u4ef6\u5185\u7f6e\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5f00\u5173\u52a8\u753b\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u4e0a\u9762\u7684\u4f8b\u5b50\u5728\u4e0b\u65b9\u6f14\u7ec3\u5b83\u4eec\u3002"),Object(s.b)(g.c,{__position:1,__code:'<StateComponent>\n  {toggle => (\n    <Transition toggle={toggle} type="slideRight" className="box">\n      Transition\n    </Transition>\n  )}\n</StateComponent>',__scope:{props:this?this.props:t,Base:b,Demo1:m,StateComponent:d,Transition:l.Transition,TransitionBase:l.TransitionBase,Playground:g.c,Props:g.d},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(d,{mdxType:"StateComponent"},(function(e){return Object(s.b)(l.Transition,{toggle:e,type:"slideRight",className:"box",mdxType:"Transition"},"Transition")}))),Object(s.b)("h3",{id:"props"},"props"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"type TransitionTypes =\n  | 'fade'\n  | 'zoom'\n  | 'punch'\n  | 'slideLeft'\n  | 'slideRight'\n  | 'slideTop'\n  | 'slideBottom'\n  | 'bounce';\n\ntype TransitionProps = {\n  /** \u52a8\u753b\u7c7b\u578b */\n  type: TransitionTypes;\n\n  /** \u9ed8\u8ba4\u4f1a\u4e3a\u6240\u6709\u7c7b\u578b\u7684\u8fc7\u6e21\u9644\u52a0fade\u8fc7\u6e21\uff0c\u5982\u679c\u9700\u8981\u7981\u7528\uff0c\u4e3a\u6b64\u9879\u4f20\u9012false */\n  alpha?: boolean;\n\n  /** \u5f00\u5173\u52a8\u753b */\n  toggle?: boolean;\n\n  /** \u521d\u6b21\u52a0\u8f7d\u65f6\u662f\u5426\u89e6\u53d1\u52a8\u753b, \u9ed8\u8ba4\u4e3atrue */\n  appear?: boolean;\n\n  /** \u5305\u88f9\u5143\u7d20\u7684tag\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3adiv, \u5fc5\u987b\u662f\u5408\u6cd5\u7684html\u5143\u7d20\u7c7b\u578b(\u6ce8\u610f\u5f53\u4e3aspan\u7b49\u5185\u8054\u5143\u7d20\u65f6transform\u4e0d\u4f1a\u751f\u6548\uff0c\u9700\u8981\u624b\u52a8\u5207\u6362\u4e3a\u5757\u7c7b\u578b) */\n  tag?: string;\n\n  /** \u52a8\u753b\u5f00\u59cb\u524d\u7684\u5ef6\u8fdf\u65f6\u95f4 */\n  delay?: number;\n\n  /** spring\u52a8\u753b\u914d\u7f6e */\n  config?: SpringBaseProps['config'];\n\n  /** \u6240\u6709\u52a8\u753b\u7ed3\u675f\u540e, \u63a5\u6536\u52a8\u753b\u7ed3\u675f\u540e\u7684\u52a8\u753b\u503c */\n  onRest?: (transitionArg: any) => void;\n\n  /** \u52a8\u753b\u5f00\u59cb */\n  onStart?: () => void;\n\n  /** \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u52a8\u753b\u7ed3\u675f\u540e\u7ec4\u4ef6\u4f9d\u7136\u4f1a\u4fdd\u6301\u6302\u8f7d\uff0c\u8bbe\u7f6e\u6b64\u5c5e\u6027\u5728\u8fc7\u6e21\u7ed3\u675f\u540e\u4f1a\u5378\u8f7d\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u4e3afalse */\n  unmountOnExit?: boolean;\n\n  /** \u521d\u6b21\u6e32\u67d3\u65f6\uff0c\u7ec4\u4ef6\u9ed8\u8ba4\u4f1a\u4ee5from\u72b6\u6001\u5148\u52a0\u8f7d\uff0c\u4e3atrue\u65f6\uff0c\u53ea\u6709\u5728\u521d\u6b21\u89e6\u53d1\u52a8\u753b\u65f6\u624d\u4f1a\u52a0\u8f7d\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u4e3afalse */\n  mountOnEnter?: boolean;\n\n  /** \u5305\u88f9\u7ec4\u4ef6\u7684\u7c7b\u540d */\n  className?: string;\n\n  /** \u5305\u88f9\u7ec4\u4ef6\u6837\u5f0f */\n  style?: React.CSSProperties;\n};\n")),Object(s.b)("hr",null),Object(s.b)("h2",{id:"transitionbase"},"TransitionBase"),Object(s.b)("p",null,"TransitionBase \u4f5c\u4e3a Transition \u7684\u5e95\u5c42\u7ec4\u4ef6\uff0c\u63d0\u4f9b\u4e86\u66f4\u539f\u59cb\u7684\u80fd\u529b\uff0c\u4e5f\u8ba9\u4f60\u80fd\u591f\u66f4\u52a0\u5b9a\u5236\u5316\u7684\u914d\u7f6e\u52a8\u753b\u6548\u679c\u6216\u901a\u8fc7\u5b83\u5305\u88c5\u51fa\u4e0a\u5c42\u7ec4\u4ef6\u3002"),Object(s.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(s.b)(m,{mdxType:"Demo1"}),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'const Demo1: React.FC = () => {\n  const [toggle, setToggle] = React.useState(false);\n\n  return (\n    <div className="wrap">\n      <div className="button-wrap">\n        <button\n          type="button"\n          onClick={() => {\n            setToggle(prev => !prev);\n          }}\n        >toggle</button>\n      </div>\n      <TransitionBase\n        toggle={toggle}\n        className="box"\n        to={{ transform: \'translate3d(-100%, 0, 0)\' }}\n        from={{ transform: \'translate3d(0%, 0, 0)\' }}\n      >\n        slideLeft\n      </TransitionBase>\n      <TransitionBase\n        toggle={toggle}\n        className="box"\n        to={{ transform: \'scale(0)\' }}\n        from={{ transform: \'scale(1)\' }}\n      >\n        zoom\n      </TransitionBase>\n      <TransitionBase\n        toggle={toggle}\n        className="box"\n        to={{ number: 0 }}\n        from={{ number: 100000 }}\n      >\n        {({ number: number }: any) => number.interpolate((n: any) => n.toFixed(2))}\n      </TransitionBase>\n    </div>\n  );\n};\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"\u6f14\u7ec3\u533a\u57df"},"\u6f14\u7ec3\u533a\u57df"),Object(s.b)("p",null,"\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u66f4\u6539\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u8fdb\u884c\u8bd5\u9a8c"),Object(s.b)(g.c,{__position:3,__code:'<StateComponent>\n  {toggle => (\n    <TransitionBase\n      toggle={toggle}\n      className="box"\n      to={{ number: 0 }}\n      from={{ number: 100000 }}\n    >\n      {({ number }) => number.interpolate(n => n.toFixed(2))}\n    </TransitionBase>\n  )}\n</StateComponent>',__scope:{props:this?this.props:t,Base:b,Demo1:m,StateComponent:d,Transition:l.Transition,TransitionBase:l.TransitionBase,Playground:g.c,Props:g.d},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(d,{mdxType:"StateComponent"},(function(e){return Object(s.b)(l.TransitionBase,{toggle:e,className:"box",to:{number:0},from:{number:1e5},mdxType:"TransitionBase"},(function(e){return e.number.interpolate((function(e){return e.toFixed(2)}))}))}))),Object(s.b)("h3",{id:"props-1"},"props"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"  /** \u52a8\u753b\u7684enter -> leave \u72b6\u6001 */\n  to: any;\n\n  /** \u52a8\u753b\u7684leave -> enter \u72b6\u6001 */\n  from: any;\n\n  /** \u7528\u4e8e\u63d2\u503c\u52a8\u753b\uff0c\u5728\u52a8\u753b\u5c5e\u6027\u4f20\u9012\u7ed9\u52a8\u753b\u5143\u7d20\u524d\u4f1a\u5c06\u5373\u5c06\u7528\u4e8e\u52a8\u753b\u7684style\u548c\u5f53\u524d\u7684toggle\u72b6\u6001\u4f20\u5165\u5e76\u8fd4\u56de\u65b0\u7684\u52a8\u753b\u5bf9\u8c61 */\n  interpolater?: (props: any, toggle: boolean) => any;\n\n  /** \u6839\u636etoggle\u6539\u53d8\u5143\u7d20\u7684visibility\u5c5e\u6027, \u7528\u4e8e\u5bf9\u4e0d\u60f3\u5378\u8f7d\u6389\u7684\u5143\u7d20\u8fdb\u884c\u53ef\u89c1\u6027\u9690\u85cf */\n  changeVisible?: boolean;\n\n  /** \u5f00\u5173\u52a8\u753b */\n  toggle?: boolean;\n\n  /** \u521d\u6b21\u52a0\u8f7d\u65f6\u662f\u5426\u89e6\u53d1\u52a8\u753b, \u9ed8\u8ba4\u4e3atrue */\n  appear?: boolean;\n\n  /** \u5305\u88f9\u5143\u7d20\u7684tag\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3adiv, \u5fc5\u987b\u662f\u5408\u6cd5\u7684html\u5143\u7d20\u7c7b\u578b(\u6ce8\u610f\u5f53\u4e3aspan\u7b49\u5185\u8054\u5143\u7d20\u65f6transform\u4e0d\u4f1a\u751f\u6548\uff0c\u9700\u8981\u624b\u52a8\u5207\u6362\u4e3a\u5757\u7c7b\u578b) */\n  tag?: string;\n\n  /** \u52a8\u753b\u5f00\u59cb\u524d\u7684\u5ef6\u8fdf\u65f6\u95f4 */\n  delay?: number;\n\n  /** spring\u52a8\u753b\u914d\u7f6e */\n  config?: SpringBaseProps['config'];\n\n  /** \u6240\u6709\u52a8\u753b\u7ed3\u675f\u540e, \u63a5\u6536\u52a8\u753b\u7ed3\u675f\u540e\u7684\u52a8\u753b\u503c */\n  onRest?: (transitionArg: any) => void;\n\n  /** \u52a8\u753b\u5f00\u59cb */\n  onStart?: () => void;\n\n  /** \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u52a8\u753b\u7ed3\u675f\u540e\u7ec4\u4ef6\u4f9d\u7136\u4f1a\u4fdd\u6301\u6302\u8f7d\uff0c\u8bbe\u7f6e\u6b64\u5c5e\u6027\u5728\u8fc7\u6e21\u7ed3\u675f\u540e\u4f1a\u5378\u8f7d\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u4e3afalse */\n  unmountOnExit?: boolean;\n\n  /** \u521d\u6b21\u6e32\u67d3\u65f6\uff0c\u7ec4\u4ef6\u9ed8\u8ba4\u4f1a\u4ee5from\u72b6\u6001\u5148\u52a0\u8f7d\uff0c\u4e3atrue\u65f6\uff0c\u53ea\u6709\u5728\u521d\u6b21\u89e6\u53d1\u52a8\u753b\u65f6\u624d\u4f1a\u52a0\u8f7d\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u4e3afalse */\n  mountOnEnter?: boolean;\n\n  /** \u5305\u88f9\u7ec4\u4ef6\u7684\u7c7b\u540d */\n  className?: string;\n\n  /** \u5305\u88f9\u7ec4\u4ef6\u6837\u5f0f */\n  style?: React.CSSProperties;\n")),Object(s.b)("div",{className:"blank"}))}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"doc\\index.mdx"}}),O.isMDXComponent=!0},"./src/index.ts":function(e,n,t){"use strict";var a=t("./src/transition.tsx");t.d(n,"Transition",(function(){return a.a}));var o=t("./src/transition-base.tsx");t.d(n,"TransitionBase",(function(){return o.a}));t("./src/type.ts");"undefined"!==typeof o.a&&o.a&&o.a===Object(o.a)&&Object.isExtensible(o.a)&&Object.defineProperty(o.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TransitionBase",filename:"src\\index.ts"}}),"undefined"!==typeof a.a&&a.a&&a.a===Object(a.a)&&Object.isExtensible(a.a)&&Object.defineProperty(a.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Transition",filename:"src\\index.ts"}})},"./src/prop-types.ts":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("./node_modules/prop-types/index.js"),o=t.n(a),r=Object.freeze({mountOnEnter:!1,unmountOnExit:!1,changeVisible:!1,tag:"div",appear:!0}),s=Object.freeze({mountOnEnter:o.a.bool,unmountOnExit:o.a.bool,tag:o.a.string,toggle:o.a.bool,appear:o.a.bool,onStart:o.a.func,onRest:o.a.func,config:o.a.object,delay:o.a.number,changeVisible:o.a.bool,className:o.a.string,style:o.a.object});"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"propsTypes",filename:"src\\prop-types.ts"}}),"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultProps",filename:"src\\prop-types.ts"}})},"./src/transition-base.tsx":function(e,n,t){"use strict";var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("react"),i=t.n(s),l=t("./node_modules/react-spring/web.js"),c=t("./node_modules/@lxjx/hooks/dist/index.esm.js"),b=t("./src/prop-types.ts");function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=function(e){var n=e.toggle,t=e.from,a=e.to,b=e.children,p=e.tag,u=e.appear,d=e.config,g=e.delay,f=e.mountOnEnter,j=e.unmountOnExit,O=e.changeVisible,y=e.style,T=e.interpolater,x=e.onStart,h=e.onRest,v=Object(r.a)(e,["toggle","from","to","children","tag","appear","config","delay","mountOnEnter","unmountOnExit","changeVisible","style","interpolater","onStart","onRest"]),P=Object(c.a)({toggle:n,count:0}),_=Object(s.useState)(!f),N=Object(o.a)(_,2),E=N[0],B=N[1],S=Object(s.useState)(n),w=Object(o.a)(S,2),R=w[0],C=w[1],D=Object(l.c)((function(){return{from:t,config:d,onStart:function(){x&&x()},onRest:function(e){h&&h(e);var n=P.count<=1&&!f;P.toggle||!j||n||B(!1),!P.toggle&&O&&C(!1)}}})),k=Object(o.a)(D,2),z=k[0],V=k[1];Object(s.useEffect)((function(){var e=0===P.count;V(n?{to:a,delay:g,immediate:!u&&e}:{to:t,immediate:!1,delay:g}),P.count++}),[t,a,n]),Object(s.useEffect)((function(){P.toggle=n,n&&(B(n),O&&C(!0))}),[n]);var F=l.a[p];F.displayName="TransitionNode";var L=T?T(z,!!n):z,A=O?{visibility:R?"visible":"hidden"}:{};return E?i.a.createElement(F,Object.assign({},v,{style:m({},y,{},L,{},A)}),"function"===typeof b?b(L):b):null};u.defaultProps=b.a,n.a=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TransitionBase",filename:"src\\transition-base.tsx"}})},"./src/transition.tsx":function(e,n,t){"use strict";var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=t("react"),s=t.n(r),i=t("./node_modules/react-spring/web.js"),l=t("./src/transition-base.tsx"),c=t("./src/prop-types.ts");function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(t,!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m={fade:{from:{opacity:0},to:{opacity:1},config:p({},i.b.stiff,{clamp:!0}),skipFade:!0,changeVisible:!0},zoom:{from:{transform:"scale3d(0, 0, 0)"},to:{transform:"scale3d(1, 1, 1)"}},punch:{from:{transform:"scale3d(1.5, 1.5, 1.5)"},to:{transform:"scale3d(1, 1, 1)"},changeVisible:!0},slideLeft:{from:{transform:"translate3d(-100%, 0, 0)"},to:{transform:"translate3d(0%, 0, 0)"}},slideRight:{from:{transform:"translate3d(100%, 0, 0)"},to:{transform:"translate3d(0%, 0, 0)"}},slideTop:{from:{transform:"translate3d(0, -100%, 0)"},to:{transform:"translate3d(0%, 0%, 0)"}},slideBottom:{from:{transform:"translate3d(0, 100%, 0)"},to:{transform:"translate3d(0, 0%, 0)"}},bounce:{to:{x:1},from:{x:0},skipFade:!0,changeVisible:!0,interpolater:function(e,n){var t=e.x,o=Object(a.a)(e,["x"]),r=t.interpolate({range:[0,.4,.6,.8,.9,1],output:[0,1.2,.8,1.1,.9,1]}).interpolate((function(e){return"scale3d(".concat(e,",").concat(e,",").concat(e,")")}));return p({},o,{transform:n?r:t.interpolate((function(e){return"scale3d(".concat(e,",").concat(e,",").concat(e,")")}))})}}},u=function(e){var n=e.type,t=e.alpha,o=Object(a.a)(e,["type","alpha"]),r=m[n],i=r.from,c=r.to,b=r.interpolater,u=r.config,d=r.skipFade,g=r.changeVisible;return t&&!d&&(i=p({},i,{},m.fade.from),c=p({},c,{},m.fade.to)),s.a.createElement(l.a,Object.assign({},o,{config:p({},u,{},o.config),from:i,to:c,changeVisible:!!g,interpolater:b}))};u.defaultProps=p({},c.a,{alpha:!0}),n.a=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Transition",filename:"src\\transition.tsx"}})},"./src/type.ts":function(e,n){"undefined"!==typeof TransitionBaseProps&&TransitionBaseProps&&TransitionBaseProps===Object(TransitionBaseProps)&&Object.isExtensible(TransitionBaseProps)&&Object.defineProperty(TransitionBaseProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TransitionBaseProps",filename:"src\\type.ts"}}),"undefined"!==typeof TransitionTypes&&TransitionTypes&&TransitionTypes===Object(TransitionTypes)&&Object.isExtensible(TransitionTypes)&&Object.defineProperty(TransitionTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TransitionTypes",filename:"src\\type.ts"}}),"undefined"!==typeof TransitionProps&&TransitionProps&&TransitionProps===Object(TransitionProps)&&Object.isExtensible(TransitionProps)&&Object.defineProperty(TransitionProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TransitionProps",filename:"src\\type.ts"}})}}]);