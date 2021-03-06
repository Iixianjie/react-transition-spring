import React from 'react';

import { TransitionBase } from '../../index';

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
        to={{ transform: 'translate3d(-100%, 0, 0)' }}
        from={{ transform: 'translate3d(0%, 0, 0)' }}
        changeVisible={false}
      >
        slideLeft
      </TransitionBase>
      <TransitionBase
        toggle={toggle}
        className="box"
        to={{ transform: 'scale(0)' }}
        from={{ transform: 'scale(1)' }}
        changeVisible
      >
        zoom
      </TransitionBase>
      <TransitionBase
        toggle={toggle}
        className="box"
        to={{ number: 0 }}
        from={{ number: 100000 }}
        changeVisible={false}
      >
        {({ number: number }: any) => number.interpolate((n: any) => n.toFixed(2))}
      </TransitionBase>
    </div>
  );
};

export default Demo1;

