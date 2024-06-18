import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };
  return (
    <>
      <form onSubmit={handlerSubmit} className="row g-3">
        <div className="col-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Adicione uma nova tarefa"
            className="form-control"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Adicionar
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskInput;
