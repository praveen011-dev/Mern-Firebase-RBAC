import "./index.css";
import { HomePage } from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { TaskList } from "./pages/TaskList";
import { CreateTask } from "./pages/CreateTask";
import Cookies from "js-cookie";
import { Toaster } from "@/components/ui/sonner";
import { UpdateTask } from "./pages/UpdateTask";
import { Profile } from "./pages/ProfilePage";
import { Navbar } from "./components/ui/sharedComponents/Navbar";
import Fotter from "./components/ui/sharedComponents/Fotter";

const PrivateRoute = ({ children }) => {
  return Cookies.get("token") ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
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
          <Route
            path="/tasks/:id"
            element={
              <PrivateRoute>
                <UpdateTask />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
        <Toaster position="top-right" richColors />
      </main>

      {/* Footer */}
      <Fotter />
    </div>
  );
}

export default App;
