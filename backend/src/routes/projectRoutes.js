    const express = require('express');
    const { protect } = require("../middleware/authMiddleware");
    const { authorizeRoles } = require("../middleware/roleMiddleware");
    const {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
    } = require("../controllers/projectController");

    const router = express.Router();

    // Create Project
    router.post('/', protect, authorizeRoles("admin", "manager"), createProject);

    // Get all projects (Any logged-in user)
    router.get("/", protect, getProjects);

    // Get single project
    router.get("/:id", protect, getProjectById);

    // Update project (Admin, Manager)
    router.put("/:id", protect, authorizeRoles("admin", "manager"), updateProject);

    // Delete project (Admin only)
    router.delete("/:id", protect, authorizeRoles("admin"), deleteProject);

    module.exports = router;