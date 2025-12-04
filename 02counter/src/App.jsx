// import { useState } from "react";

// import "./App.css";
import { useState } from "react";

// import "./App.css";

// function App() {
//   // let [counter, setCounter] = useState(0);
//   // const addValue = () => {
//   //   setCounter(counter + 1);
//   // };
//   // const removeValue = () => {
//   //   setCounter(counter - 1);
//   // };
//   // ****** assignment hai k value should not exceed 20 and should not be negative
//   // agr ye neeche k assignment mein setCounter(counter + 1) likha hua hai 4 times repreat karne pr o/p kya hoga
//   // interview qstn hai kuch b nhi same he output hoga means ek click pr ek baar he number increment hoga
//   // agr usko ek click pr multiple number increment karna hai to jo use karna hai side mein likha hua hai
//   let [counter, setCounter] = useState(0);
//   const addValue = () => {
//     if (counter < 20) {
//       setCounter(counter + 1);
//       setCounter(counter + 1);
//       setCounter(counter + 1);
//       setCounter(counter + 1);
//       // ooper 4 times repeat b karne se ek baar he increment hoga
//       // agr 4 times likhne k baad 4 increment hona bole to
//       setCounter((counter) => counter + 1);
//       setCounter((counter) => counter + 1);
//       setCounter((counter) => counter + 1);
//       setCounter((counter) => counter + 1);
//       // is mein har baar counter mein previous counter ki value hold hogi
//       // aur counter seedha 4 values ek saath badha dega
//     }
//   };
//   const removeValue = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   };

//   return (
//     <>
//       <h1>learning React Js</h1>
//       <h2>Counter value : {counter} </h2>
//       <button onClick={addValue}>Increment: {counter}</button>
//       <br />
//       <button onClick={removeValue}>Decrement: {counter}</button>

//       <p>footer : {counter}</p>
//     </>
//   );
// }

// export default App;

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      // setCounter(counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <h1>learing hooks in react</h1>
        <h2>Counter value : {counter}</h2>
        <button onClick={addValue}>Add Value: {counter}</button>
        <button onClick={removeValue}>remove Value:{counter}</button>
      </div>
    </>
  );
}

export default App;
