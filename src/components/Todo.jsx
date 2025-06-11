import dayjs from "dayjs";

const Todo = ({ data, handleClickTodo, handleTodoToComplete }) => {
  return (
    <div
      onClick={() => handleClickTodo(data)}
      className={`flex items-start gap-2 rounded-md shadow-md p-2 border-b bg-white ${
        data?.isCompleted ? "border-green-400" : "border-blue-400"
      } `}
    >
      {!data?.isCompleted && (
        <input
          type="checkbox"
          checked={data.isCompleted}
          onChange={(e) => {
            e.stopPropagation();
            handleTodoToComplete(data);
          }}
        />
      )}

      <div className="mt-[-5px]">
        <h3>{data?.name}</h3>
        <p>{data?.date ? dayjs(data.date).format("DD MMMM, YYYY") : ""}</p>
      </div>
    </div>
  );
};

export default Todo;
