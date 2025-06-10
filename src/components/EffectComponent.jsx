import { useEffect, useState } from "react";

const EffectComponent = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch("/json/product.json");
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}

      <div className="mt-5">
        {counter}
        <button
          onClick={() => setCounter(counter + 1)}
          className="ms-2 text-white rounded-md bg-blue-500 w-fit px-1"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default EffectComponent;
