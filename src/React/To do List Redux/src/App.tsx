import AddToDoList from "./components/AddToDoList.tsx";
import ToDoList from "./components/ToDoList.tsx";

function App() {
  return (
    <>
      <div className="container bg-secondary rounded border border-white w-50 d-flex align-items-center justify-content-center flex-column mt-5">
        <h1 className="text-center fw-bold">To do List</h1>
        <AddToDoList />
        <ToDoList />
      </div>
    </>
  );
}

export default App;
