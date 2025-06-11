import { useEffect, useRef, useState } from "react";
import Todo from "./Todo";
import TodoEmpty from "./TodoEmpty";
import { useImmer } from "use-immer";
import dayjs from "dayjs";
import TodoForm from "./TodoForm";

const TodoList = () => {
  // Ref
  const formRef = useRef(null);

  // State
  const [todos, setTodos] = useImmer([]);
  const [todo, setTodo] = useImmer({
    id: "",
    name: "",
    date: dayjs(new Date()).format("YYYY-MM-DD"),
    isCompleted: false,
  });
  const [showTodoForm, setShowTodoForm] = useState(false);

  useEffect(() => {
    if (showTodoForm) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showTodoForm]);

  const resetTodo = () => {
    setTodo((draft) => {
      draft.id = "";
      draft.name = "";
      draft.date = dayjs(new Date()).format("YYYY-MM-DD");
      draft.isCompleted = false;
    });
  };

  const handleClickTodo = (item) => {
    setTodo({
      id: item.id,
      name: item.name,
      date: item.date,
    });
    setShowTodoForm(true);
  };

  const handleTodoToComplete = (item) => {
    resetTodo();
    setShowTodoForm(false);
    setTodos((draft) => {
      const index = draft.findIndex((d) => d.id === item.id);
      if (index !== -1) {
        draft[index].isCompleted = true;
      }
    });
  };

  const handleClickButtonCancel = () => {
    resetTodo();
    setShowTodoForm(false);
  };

  const handleClickButtonSave = () => {
    setTodos((draft) => {
      const index = draft.findIndex((d) => d.id === todo.id);
      if (index == -1) {
        draft.push({
          id: Date.now(),
          name: todo.name,
          date: todo.date,
          isCompleted: false,
        });
      } else {
        draft[index].name = todo.name;
        draft[index].date = todo.date;
        draft[index].isCompleted = false;
      }
    });

    resetTodo();
    setShowTodoForm(false);
  };

  return (
    <div>
      <div className="bg-gray-100 relative mx-auto w-[481px] max-sm:w-full shadow-md min-h-screen p-5">
        <h1 className="text-center mb-10 font-bold">ALL TODO</h1>
        <div className="flex flex-col gap-2">
          <h2>Things Todo</h2>
          {todos.filter((item) => !item.isCompleted).length > 0 ? (
            todos
              .filter((item) => !item.isCompleted)
              .map((item) => (
                <Todo
                  key={item.id}
                  data={item}
                  handleClickTodo={handleClickTodo}
                  handleTodoToComplete={handleTodoToComplete}
                />
              ))
          ) : (
            <TodoEmpty />
          )}
        </div>

        {/* Untuk menambah atau mengedit todo */}
        {showTodoForm && (
          <TodoForm
            todo={todo}
            setTodo={setTodo}
            handleClickButtonCancel={handleClickButtonCancel}
            handleClickButtonSave={handleClickButtonSave}
            ref={formRef}
          />
        )}

        <div className="flex flex-col gap-2 mt-5">
          <h2>Completed</h2>
          {todos.filter((item) => item.isCompleted).length > 0 ? (
            todos
              .filter((item) => item.isCompleted)
              .map((item) => <Todo key={item.id} data={item} />)
          ) : (
            <TodoEmpty />
          )}
        </div>

        <div className="fixed bottom-2 right-2">
          <button
            onClick={() => setShowTodoForm(true)}
            className="bg-blue-400 hover:bg-blue-300 rounded-[100%] px-3 py-1 text-white shadow-md text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
