import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice.ts";
import { useState } from "react";

const AddToDoList = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form className="d-flex align-items-center p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicione uma tarefa..."
        className="form-control mx-2 border border-secondary-subtle"
        aria-label="texto"
      />
      <button type="submit" className="btn btn-primary">
        Adiconar
      </button>
    </form>
  );
};

export default AddToDoList;
