import "./index.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center font-bold ">MERN Firebase RBAC!</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <button>
          <a href="/login">login</a>
        </button>

        <button>
          <a href="/signup">signup</a>
        </button>
      </div>
    </>
  );
}

export default App;
