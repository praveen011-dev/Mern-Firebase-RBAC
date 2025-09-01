import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "@/utils/api";
export const Navbar = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get("user/profile");
        setUser(data.user);
      } catch (err) {
        setUser(null);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-black">Task Manager</div>
      <div className="flex gap-6 items-center">
        {user ? (
          <>
            <span className="font-medium">{user.email}</span>
            <Button onClick={() => navigate("/profile")}>Profile</Button>

            <Button
              variant="outline"
              className="mr-2"
              onClick={() => navigate("/create-task")}
            >
              Create Task
            </Button>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
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
        )}
      </div>
    </nav>
  );
};
