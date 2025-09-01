import Task from "../models/task.model.js";

const createTask = async (req, res) => {
  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
    ownerUid: req.user.uid,
  });
  res.status(201).json({ message: "Task created successfully", task });
};

const getTasks = async (req, res) => {
  const { role, uid } = req.user;
  const filter =
    role === "admin" || role === "manager" ? {} : { ownerUid: uid };
  const tasks = await Task.find(filter).sort({ createdAt: -1 });
  res.json(tasks);
};

const updateTask = async (req, res) => {
  const { role, uid } = req.user;
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Not found" });
  if (!(role === "admin" || role === "manager" || task.ownerUid === uid)) {
    return res.status(403).json({ message: "Forbidden" });
  }
  Object.assign(task, req.body);
  await task.save();
  res.json(task);
};

const deleteTask = async (req, res) => {
  const deleted = await Task.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ ok: true });
};

export { createTask, getTasks, updateTask, deleteTask };
