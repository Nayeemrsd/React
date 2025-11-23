import "./App.css";
import JobList from "./pages/JobList";

function App() {
  return (
    <>
      <div className="text-3xl bg-blue-500 text-center p-4">
        {" "}
        This is the clone of indeed
      </div>
      <br />
      <div className="">
        <JobList />
      </div>
    </>
  );
}

export default App;
