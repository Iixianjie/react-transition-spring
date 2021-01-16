import React, { useState } from 'react';
import { Transition, config } from '../../index';

const Demo2 = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>click</button>
      <Transition
        toggle={show}
        type="zoom"
        config={config.stiff}
        mountOnEnter={true}
        unmountOnExit={false}
        className="box222"
        alpha
        style={{
          left: 200,
          top: 200,
        }}
        // reset
      >
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      </Transition>
      <Transition
        toggle={show}
        type="slideLeft"
        config={config.stiff}
        mountOnEnter={true}
        unmountOnExit={false}
        className="box222"
        alpha
        style={{
          left: 400,
          top: 200,
        }}
        // reset
      >
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      </Transition>
      <Transition
        toggle={show}
        type="slideTop"
        config={config.stiff}
        mountOnEnter={true}
        unmountOnExit={false}
        className="box222"
        alpha
        style={{
          left: 600,
          top: 200,
        }}
        // reset
      >
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      </Transition>
      <Transition
        toggle={show}
        type="slideRight"
        config={config.stiff}
        mountOnEnter={true}
        unmountOnExit={false}
        className="box222"
        alpha
        style={{
          left: 400,
          top: 400,
        }}
        // reset
      >
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      </Transition>
      <Transition
        toggle={show}
        type="slideBottom"
        config={config.stiff}
        mountOnEnter={true}
        unmountOnExit={false}
        className="box222"
        alpha
        style={{
          left: 200,
          top: 400,
        }}
        // reset
      >
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      </Transition>
    </div>
  );
};

export default Demo2;
