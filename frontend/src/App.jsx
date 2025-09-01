import "./index.css";
import { HomePage } from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { TaskList } from "./pages/TaskList";
import { CreateTask } from "./pages/CreateTask";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  return Cookies.get("token") ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/create-task"
            element={
              <PrivateRoute>
                <CreateTask />
              </PrivateRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <TaskList />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
