import { useState } from "react";

const Snapshot = () => {
  const [counter, setCounter] = useState(0);

  const handleClickButtonIncrement = () => {
    setCounter((c) => c + 1); // 1
    setCounter((c) => c + 1); // 2
    setCounter((c) => c + 1); // 3
    console.log(counter); // 0
  };

  const handleClickButtonDecrement = () => {
    setCounter(counter + 1);
  };


  return (
    <div>
      <p>{counter}</p>
      <button
        className="bg-blue-400 rounded-md p-1 text-white"
        onClick={handleClickButtonIncrement}
      >
        Increment
      </button>
      <button
        className="bg-red-400 rounded-md p-1 text-white"
        onClick={handleClickButtonDecrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default Snapshot;
