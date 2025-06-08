import { useState } from "react";
import { useImmer } from "use-immer";
import HelloWorld from "./HelloWorld";

const ContactFromWithoutRef = () => {
  const [data, setData] = useImmer({
    name: "",
    email: "",
    age: 0,
    address: {
      street: "",
      city: "",
      country: "",
    },
  });

  const [todos, setTodos] = useImmer([]);
  const [todo, setTodo] = useState("");

  const handleClickSubmitButton = (e) => {
    e.preventDefault();
  };

  const handleClickButtonAddTodo = () => {
    setTodo("");
    setTodos((draft) => {
      draft.push({
        name: todo,
      });
    });
  };

  return (
    <form action="">
      <div>Contact From</div>
      <div>
        <label htmlFor="">Name</label>
        <input
          className="border"
          type="text"
          value={data.name}
          onChange={(e) =>
            setData((draft) => {
              draft.name = e.target.value;
            })
          }
        />
      </div>
      <div className="mt-2">
        <label htmlFor="">Email</label>
        <input
          className="border"
          type="email"
          value={data.email}
          onChange={(e) =>
            setData((draft) => {
              draft.email = e.target.value;
            })
          }
        />
      </div>
      <div className="mt-2">
        <label htmlFor="">Age</label>
        <input
          className="border"
          type="number"
          value={data.age}
          onChange={(e) =>
            setData((draft) => {
              draft.age = e.target.value;
            })
          }
        />
      </div>

      <div>
        <label htmlFor="">Street</label>
        <input
          className="border"
          type="text"
          value={data.address.street}
          onChange={(e) =>
            setData((draft) => {
              draft.address.street = e.target.value;
            })
          }
        />
      </div>
      <div>
        <label htmlFor="">City</label>
        <input
          className="border"
          type="text"
          value={data.address.city}
          onChange={(e) =>
            setData((draft) => {
              draft.address.city = e.target.value;
            })
          }
        />
      </div>
      <div>
        <label htmlFor="">Country</label>
        <input
          className="border"
          type="text"
          value={data.address.country}
          onChange={(e) =>
            setData((draft) => {
              draft.address.country = e.target.value;
            })
          }
        />
      </div>
      <div>
        <button
          onClick={handleClickSubmitButton}
          className="bg-blue-400 p-1 rounded-md text-white"
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <div>Name: {data.name}</div>
        <div>Email: {data.email}</div>
        <div>Age: {data.age}</div>
        <div>Street: {data.address.street}</div>
        <div>City: {data.address.city}</div>
        <div>Country: {data.address.country}</div>
      </div>

      <div className="mt-5">
        <p>TODOS</p>
        {todos.map((todo, index) => (
          <div key={index}>
            <div>{todo.name}</div>
          </div>
        ))}

        <div>
          <input
            className="border"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="button"
            onClick={handleClickButtonAddTodo}
            className="bg-blue-400 p-1 rounded-md text-white"
          >
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactFromWithoutRef;
