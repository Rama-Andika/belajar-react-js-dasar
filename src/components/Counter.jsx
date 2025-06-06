import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button
        className="bg-blue-400 rounded-md p-1 text-white"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <button
        className="bg-red-400 rounded-md p-1 text-white"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
