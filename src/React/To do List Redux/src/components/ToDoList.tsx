import { useDispatch, useSelector } from "react-redux";
import { filterTodos, removeTodo, toggleTodo } from "../slices/todoSlice.ts";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosState {
  list: Todo[];
  filter: string;
}

const ToDoList = () => {
  const todos = useSelector((state: { todos: TodosState }) => state.todos);
  const { list, filter } = todos;
  const dispatch = useDispatch();
  const filteredList = list.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });
  return (
    <div className="container d-flex align-items-center justify-content-center flex-column">
      <div className="p-2">
        <button
          onClick={() => dispatch(filterTodos("all"))}
          className="btn btn-light mx-2"
        >
          Todas
        </button>
        <button
          onClick={() => dispatch(filterTodos("completed"))}
          className="btn btn-light mx-2"
        >
          Completas
        </button>
        <button
          onClick={() => dispatch(filterTodos("incomplete"))}
          className="btn btn-light"
        >
          Incompletas
        </button>
      </div>
      <ul className="list-group list-group-flush w-auto align-items-center mt-2">
        {filteredList.map((todo: Todo) => (
          <li
            key={todo.id}
            className="list-group-item list-group-item-secondary d-flex align-items-center justify-content-between w-100 mb-3 p-3 rounded"
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={todo.completed ? "text-decoration-line-through" : ""}
            >
              {todo.text}
            </span>
            <div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="btn btn-danger ms-2"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
