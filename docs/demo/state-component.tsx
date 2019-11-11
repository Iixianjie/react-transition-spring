import React from 'react';

const StateComponent: React.FC<{
  children: (toggle: boolean) => React.ReactNode,
}> = ({ children }) => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <div>
      <div className="button-wrap">
        <button
          type="button"
          onClick={() => {
            setToggle(prev => !prev);
          }}
        >toggle</button>
      </div>
      <div>{children(toggle)}</div>
    </div>
  );
};

export default StateComponent;
