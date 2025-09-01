import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import api from "@/utils/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/tasks");
      setTasks(data);
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    toast("Are you sure?", {
      description: "This action cannot be undone.",
      action: {
        label: "Yes",
        onClick: async () => {
          try {
            await api.delete(`/tasks/${id}`);
            toast.success("Task deleted successfully!");
            fetchTasks();
          } catch (error) {
            toast.error(error.response?.data?.message || error.message);
          }
        },
      },
    });
  };

  const handleUpdate = (task) => {
    navigate(`/tasks/${task._id}`, { state: { task } });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-[60vh] w-1/2 mx-auto mt-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>
      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Status: {task.status}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Created by: {task.ownerEmail} ({task.ownerRole})
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleUpdate(task)}
                >
                  Update
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
