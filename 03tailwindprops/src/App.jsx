// import "./App.css";
// import Card from "./components/Card";

import Card from "./components/Card";

// function App() {
//   return (
//     <>
//       <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
//         Tailwind and Props
//       </h1>
//       <Card username="mirza" btnText="Click me" />
//       <br />
//       <Card username="Aayat" />
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <h1 className="bg-green-800 text-3xl text-gray p-4 rounded-xl text-center">
        Tailwind and props
      </h1>
      <Card username={"nayeem"} btnText="Use me" />
      <Card />
    </div>
  );
}
export default App;
