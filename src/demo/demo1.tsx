import React from 'react';

import { TransitionBase, Transition } from  '../index';

import './style.css';

const Demo1: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="wrap">
      <div className="button-wrap">
        <button
          type="button"
          onClick={() => {
            setToggle(prev => !prev);
          }}
        >toggle</button>
      </div>
      <TransitionBase
        toggle={toggle}
        className="box"
        to={{ transform: 'translate3d(100%, 0, 0)' }}
        from={{ transform: 'translate3d(0%, 0, 0)' }}
        // unmountOnExit
        mountOnEnter
      >
        div
      </TransitionBase>
      <TransitionBase
        toggle={toggle}
        className="box"
        to={{ number: 0 }}
        from={{ number: 100000 }}
      >
        {({ number: number }: any) => number.interpolate((n: any) => n.toFixed(2))}
      </TransitionBase>
      <TransitionBase
        toggle={toggle}
        className="box"
        to={{ transform: 'translate3d(100%, 0, 0) scale(1)' }}
        from={{ transform: 'translate3d(0%, 0, 0) scale(0)' }}
        unmountOnExit
        mountOnEnter
      >
        div
      </TransitionBase>

      <div className="button-wrap">
        <button
          type="button"
          onClick={() => {
            setToggle(prev => !prev);
          }}
        >toggle</button>
      </div>
      <Transition toggle={toggle} type="fade" className="box">
        fade
      </Transition>
      <Transition toggle={toggle} type="zoom" className="box">
        zoom
      </Transition>
      <Transition toggle={toggle} type="punch" className="box">
        punch
      </Transition>
      <Transition toggle={toggle} type="bounce" className="box">
        bounce
      </Transition>
      <Transition toggle={toggle} type="slideLeft" className="box">
        slideLeft
      </Transition>
      <Transition toggle={toggle} type="slideRight" className="box">
        slideRight
      </Transition>
      <Transition toggle={toggle} type="slideTop" className="box">
        slideTop
      </Transition>
      <Transition toggle={toggle} type="slideBottom" className="box">
        slideBottom
      </Transition>
    </div>
  );
};

export default Demo1;
