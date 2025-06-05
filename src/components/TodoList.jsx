import Todo from "./Todo";

const TodoList = () => {
  // Array of objects
  const data = [
    { text: "Makan", isCompleted: true, onClick: () => alert("Makan") },
    { text: "Minum", isCompleted: false, onClick: () => alert("Minum") },
    { text: "Main", isCompleted: false, onClick: () => alert("Main") },
    { text: "Rebahan", isCompleted: false, isDeleted: true },
  ];

  return (
    <>
      {data.map((todo, index) => (
        <Todo
          key={index}
          text={todo.text}
          isCompleted={todo.isCompleted}
          isDeleted={todo.isDeleted}
          onClick={todo.onClick}
        />
      ))}
    </>
  );
};

export default TodoList;
