import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import api from "@/utils/api";
import { useNavigate } from "react-router-dom";

export const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!title || !description) return alert("Title & description required");
    setLoading(true);
    try {
      await api.post("/tasks", { title, description });
      alert("Task created successfully!");
      navigate("/tasks"); // redirect to task list
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 min-h-[60vh] bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Create a Task</h2>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <Input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={handleCreate} disabled={loading}>
          {loading ? "Creating..." : "Create Task"}
        </Button>
      </div>
    </div>
  );
};
