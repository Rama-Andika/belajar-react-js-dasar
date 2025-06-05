const Todo = ({ text, isCompleted, isDeleted, onClick }) => {
  if (isDeleted) return null;

  return (
    <div onClick={onClick}>
      {isCompleted ? (
        <div className="text-green-300 line-through">
          {text} {isCompleted && "😁"}
        </div>
      ) : (
        <div className="text-red-500">{text}</div>
      )}
    </div>
  );
};
export default Todo;
