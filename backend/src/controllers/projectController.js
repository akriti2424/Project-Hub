const Project = require("../models/Project");

/* Create project admin or manager */
exports.createProject = async(req, res) =>{
    try{
        const {name, description, members} = req.body;
        const project = await Project.create(
            {
                name,
                 description,
                 members,
                 createdBy: req.user._id
            }
        );
         res.status(201).json(project);
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

// Get All Projects (Any logged-in user)
exports.getProjects = async(req, res) =>{
    try{
        const projects = await Project.find().
        populate("createdBy", "name email role").
        populate("members", "name email role")
        res.json(projects);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

// Get Single Project
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("createdBy", "name email role")
      .populate("members", "name email role");

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Project (Admin, Manager)
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Project (Admin only)
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
