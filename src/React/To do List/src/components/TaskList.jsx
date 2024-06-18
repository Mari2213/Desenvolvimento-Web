import Task from "./Task.jsx";

const TaskList = ({ tasks, onDeleteTask, onToggleTaskDone }) => {
  if (tasks.length === 0) {
    return <h4 className="text-white">Nenhuma tarefa cadastrada</h4>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
          onToggleDone={() => onToggleTaskDone(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
