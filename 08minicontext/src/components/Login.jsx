import { useState } from "react";
import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const isDisabled = !username.trim() || !password.trim();
  //   ye is disabled jo hai wo sirf input field jab b sirf empty rahenge tab k liye use hai
  // ye course mein nhi bataya mai apne aap se karru

  const handleSubmit = (e) => {
    e.preventDefault;

    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      {"  "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button disabled={isDisabled} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;

// import React from "react";
// import { UserContext } from "../context/UserContext";
// import { useContext } from "react";
// import { useState } from "react";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const { setUser } = useContext(UserContext);

//   const isDisabled = !username.trim() || !password.trim();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUser({ username, password });
//   };
//   return (
//     <div>
//       <h2>Login</h2>;
//       <input
//         type="text"
//         placeholder="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />{" "}
//       <input
//         type="text"
//         placeholder="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button disabled={isDisabled} onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default Login;
