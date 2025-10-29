import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../component/Home/Home.jsx";
import About from "../component/About/About.jsx";
import Contact from "../component/Contact/Contact.jsx";
import User from "../component/User/User.jsx";
import Github from "../component/Github/Github.jsx";
import { githubDataLoader } from "./DataLoad.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
// ye ek aur method hai jis se aap router bana sakte jo b pasand hai aur easy to remember hai wo use karlena

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubDataLoader} path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />

    {/* routerProvider ek props leta uske bina kuch b handle nhi kar sakte aur wo prop "router hai as shown above"  */}
    {/* routing poori sirf yahan se hori ye ek element se  */}
    {/* router jo ooper bana wohi poora manage karega k kahan konse path pr aap ko jana hai */}
  </StrictMode>
);
