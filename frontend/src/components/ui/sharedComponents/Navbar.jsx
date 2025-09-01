import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token"); // check if user is logged in

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-black">Task Manager</div>
      <div>
        {!token ? (
          <>
            <Button
              variant="outline"
              className="mr-2"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button onClick={() => navigate("/signup")}>Sign Up</Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              className="mr-2"
              onClick={() => navigate("/create-task")}
            >
              Create Task
            </Button>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        )}
      </div>
    </nav>
  );
};
