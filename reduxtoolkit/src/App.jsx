import "./App.css";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="text-3xl bg-green-600 p-4 text-white ">
        <h1>Learn React Reduxtoolkit</h1>
        <AddTodos />
        <Todos />
      </div>
    </>
  );
}

export default App;
