import { useRef, useState } from "react";

const ContactFrom = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const nameInput = useRef("");
  const emailInput = useRef("");
  const ageInput = useRef("");

  const handleClickSubmitButton = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const age = ageInput.current.value;
    setData({
      name: name,
      email: email,
      age: age,
    });
  };
  return (
    <form action="">
      <div>Contact From</div>
      <div>
        <label htmlFor="">Name</label>
        <input ref={nameInput} className="border" type="text" />
      </div>
      <div className="mt-2">
        <label htmlFor="">Email</label>
        <input ref={emailInput} className="border" type="email" />
      </div>
      <div className="mt-2">
        <label htmlFor="">Age</label>
        <input ref={ageInput} className="border" type="number" />
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
      </div>
    </form>
  );
};

export default ContactFrom;
