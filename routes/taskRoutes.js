const router = require("express").Router();
const Task = require("../models/Task");

// Create Task
router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

// Get Tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find().populate("assignedTo");
  res.json(tasks);
});

// Update Status
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

module.exports = router;