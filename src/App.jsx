import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Discount from "./components/Discount";
import { Suspense, lazy } from "react";
const Signup = lazy(() => import("./components/auth/Signup"));
const Navbar = lazy(() => import("./components/Navbar"));
const Verify = lazy(() => import("./components/auth/Verify"));

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
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
