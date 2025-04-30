const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {
  getDashboardData,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
  getUserDashboardData,
  createTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); //Admin: all tasks User:assigned
router.get("/:id", protect, getTaskById);
router.post("/", protect, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, adminOnly, deleteTask);
router.put("/:id/status", protect, updateTaskStatus);
router.put("/:id/todo", protect, updateTaskChecklist);

module.exports = router;
