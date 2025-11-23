import { useState } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { useEffect } from "react";
import authService from "./appwrite/auth";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  });

  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // is tarah se hum environment variable access karna hota hai (import.meta.env) se

  // console.log(process.env.REACT_APP_APPWRITE_URL);
  // create react app se aise access kar sakte hain

  return !loading ? (
    <div className="h-screen flex  bg-gray-400">
      <div className="w-full block  item-center justify-center ">
        <Header />
        <main>TODO: {/* <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
