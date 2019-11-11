import React, { useEffect } from 'react';

import { TransitionBase, Transition } from '../../src';
import { doc } from 'father';

const Base: React.FC = () => {
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

export default Base;
