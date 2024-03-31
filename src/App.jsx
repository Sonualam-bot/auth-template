import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Discount from "./components/Discount";
import { Suspense, lazy } from "react";
import UserInterest from "./components/UserInterest";
const Signup = lazy(() => import("./components/auth/Signup"));
const Navbar = lazy(() => import("./components/Navbar"));
const Verify = lazy(() => import("./components/auth/Verify"));
const Login = lazy(() => import("./components/auth/Login"));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Discount />
        <Suspense
          fallback={
            <div className="w-full h-screen flex items-center justify-center ">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/login" element={<Login />} />
            <Route path="/markInterest" element={<UserInterest />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
