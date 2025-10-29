import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// function Demo() {
//   return <p>This is the way to create a demo</p>;
// }

// createRoot(document.getElementById("root")).render(<Demo />);
// aisa b likh kar hum render kar sakte hain demo ko alag se ek file banake render karne k bajaye

// ******** customize karne k liye hum aise b kaam kar sakte hain  **********

/* const customElement = (
  <a href="https://google.com" target="_blank">
    Click me to visit google
  </a>
);

createRoot(document.getElementById("root")).render(customElement); */

// ***** aur ek tariqe se b customize kar sakte hain *********
// is method mein react.createElement() k ander three parameters hote
// 1. jo b tag use karna hai wo tag
// 2. uske ander koi link ya kuch aur set karna hai to wo
// 3. jisko hum tag k ander likhte hai jaise k "click me to visit google"

const customElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google website"
);

// createRoot(document.getElementById("root")).render(customElement);
/* aise tariqe use karke hum custom build kar sakte hain jo k bataya gaya hai video k andar */
createRoot(document.getElementById("root")).render(<App />);
