import "./App.css";
import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind and Props
      </h1>
      <Card username="mirza" btnText="Click me" />
      <br />
      <Card username="Aayat" />
    </>
  );
}

export default App;
