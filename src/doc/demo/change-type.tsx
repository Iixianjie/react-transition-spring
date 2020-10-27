import React from 'react';

import { Transition, TransitionTypes } from '../../index';

const ChangeType = () => {
  const [toggle, setToggle] = React.useState(true);
  const [type, setType] = React.useState<TransitionTypes>('slideRight');

  return (
    <div>
      <div>
        <button onClick={() => setToggle(p => !p)}>toggle</button>
        <button onClick={() => setType('slideRight')}>slide</button>
        <button onClick={() => setType('zoom')}>zoom</button>
      </div>
      <Transition
        toggle={toggle}
        className="box"
        type={type}
        reset
        onStart={() => {
          console.log('start');
        }}
      >
        {toggle.toString()}
      </Transition>
    </div>
  );
};

export default ChangeType;
