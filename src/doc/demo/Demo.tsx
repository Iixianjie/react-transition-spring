import React, { useEffect, useRef, useState } from 'react';
import TransitionBase from '../../transition-base';

const box = {
  width: 100,
  height: 100,
  border: '1px solid red',
}

const Demo = () => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: 100 }}>
      <button onClick={() => setShow(!show)}>toggle</button>
      <TransitionBase
        toggle={show}
        style={box}
        to={{ opacity: 1 }}
        from={{ opacity: 0 }}
        onRest={(v) => {
          console.log('onRest', v);
        }}
        onStart={(v) => {
          console.log('onStart', v);
        }}
        // mountOnEnter
        // unmountOnExit
      >
        <div>123123</div>
      </TransitionBase>
    </div>
  );
};

export default Demo;
