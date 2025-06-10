import { useRef } from "react";

const RefDOMManipulation = () => {
  const refInput = useRef(null);

  const handleClick = () => {
    if (refInput.current) {
      refInput.current.focus();
    }
  };
  return (
    <div>
      <input
        ref={refInput}
        className="appearance-none focus:bg-red-400 border"
        type="text"
      />
      <button
        onClick={handleClick}
        className="bg-blue-400 rounded-md p-1 text-white "
      >
        Click me to input focus!
      </button>
    </div>
  );
};

export default RefDOMManipulation;
