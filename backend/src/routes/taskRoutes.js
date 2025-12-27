const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const router = express.Router();

// Create task (Admin, Manager)
router.post("/", protect, authorizeRoles("admin", "manager"), createTask);

// Get tasks by project
router.get(
  "/project/:projectId",
  protect,
  getTasksByProject
);

// Update task
router.put(
  "/:id",
  protect,
  authorizeRoles("admin", "manager"),
  updateTask
);

// Delete task
router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  deleteTask
);

module.exports = router;
