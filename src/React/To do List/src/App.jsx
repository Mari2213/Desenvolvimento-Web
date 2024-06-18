import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTasks = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);

    // localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task,
      ),
    );
  };
  return (
    <>
      <h1 className="p-4 text-white font-bold">Lista de Tarefas</h1>
      <TaskInput onAddTask={addTasks} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTaskDone={toggleTask}
      />
    </>
  );
}

export default App;
