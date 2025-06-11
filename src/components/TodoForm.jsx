const TodoForm = ({
  todo,
  setTodo,
  handleClickButtonCancel,
  handleClickButtonSave,
  ref,
}) => {
  return (
    <div ref={ref} className="flex flex-col gap-2 my-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="">Name</label>
        <input
          className="border rounded-md border-slate-300 ps-2 bg-white"
          value={todo.name}
          onChange={(e) =>
            setTodo((draft) => {
              draft.name = e.target.value;
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Date</label>
        <input
          className="border rounded-md border-slate-300 ps-2 bg-white"
          type="date"
          value={todo.date}
          onChange={(e) =>
            setTodo((draft) => {
              draft.date = e.target.value;
            })
          }
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={handleClickButtonCancel}
          className="bg-yellow-300 px-2 rounded-md tshadow-sm"
        >
          Cancel
        </button>
        <button
          onClick={handleClickButtonSave}
          className="bg-blue-300 px-2 rounded-md text-white tshadow-sm"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
