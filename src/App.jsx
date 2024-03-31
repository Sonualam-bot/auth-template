import "./App.css";
import Discount from "./components/Discount";
import Navbar from "./components/Navbar";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Discount />
      <Signup />
    </>
  );
}

export default App;
