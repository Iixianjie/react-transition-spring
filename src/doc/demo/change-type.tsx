import React from 'react';

import { TransitionBase, Transition, TransitionTypes } from '../../index';

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
        alpha={false}
      >
        {toggle.toString()}
      </Transition>
    </div>
  );
};

export default ChangeType;
