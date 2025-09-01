import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import api from "@/utils/api";

export const UpdateTask = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { task } = location.state; // pre-filled task data

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.put(`/tasks/${task._id}`, { title, description, status });
      toast.success("Task updated successfully!");
      navigate("/tasks"); // redirect back to TaskList
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Update Task</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <Button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Task"}
        </Button>
      </form>
    </div>
  );
};
