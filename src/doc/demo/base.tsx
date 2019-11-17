import React, { useEffect } from 'react';

import { TransitionBase, Transition } from '../../index';

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
      <div className="box-warp">
        <Transition toggle={toggle} type="fade" className="box">
          fade
        </Transition>
      </div>
      <div className="box-warp">
        <Transition toggle={toggle} type="zoom" className="box" >
          zoom
        </Transition>
      </div>
      <div className="box-warp">
        <Transition toggle={toggle} type="punch" className="box">
          punch
        </Transition>
      </div>
      <div className="box-warp">
        <Transition toggle={toggle} type="bounce" className="box">
          bounce
        </Transition>
      </div>
      <div className="box-warp">
        <Transition toggle={toggle} type="slideLeft" className="box">
          slideLeft
        </Transition>
      </div>
      <div className="box-warp">
        <Transition toggle={toggle} type="slideRight" className="box">
          slideRight
        </Transition>
      </div>
      <div className="box-warp">
        <Transition toggle={toggle} type="slideTop" className="box">
          slideTop
        </Transition>
      </div>
      <div className="box-warp">
        <Transition toggle={toggle} type="slideBottom" className="box">
          slideBottom
        </Transition>
      </div>
    </div>
  );
};

export default Base;
