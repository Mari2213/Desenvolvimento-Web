const Task = ({ task, onDelete, onToggleDone }) => {
  return (
    <li
      className="list-group-item justify-content-between align-items-center d-flex mb-2"
      role="button"
    >
      <span
        onClick={onToggleDone}
        style={{ textDecoration: task.done ? "line-through" : "none" }}
        className="font-bold"
      >
        {task.text}
      </span>
      <button onClick={onDelete} className="btn btn-primary">
        Remover
      </button>
    </li>
  );
};

export default Task;
