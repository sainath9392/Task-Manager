const Task = require("../models/Task");

//des Get all tasks (Admin:All, User: assigned tasks)
//route GET/api/tasks
//acces Private
const getTasks = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//des Get task by id
//route GET/api/tasks/:id
//acces Private
const getTaskById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//des create task (Admin only)
//route POST/api/tasks/
//acces Private
async function createTask(req, res) {
    try {
      const { title, description, priority, assignedTo, dueDate ,attachments, todoChecklist} = req.body;
  
      if (!title || !description || !assignedTo || !dueDate) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (!req.user || !req.user._id) {
        return res.status(401).json({ message: "Unauthorized: User information is missing" });
      }

      if(!Array.isArray(assignedTo)){
        return res.status(400).json({message:"assignedTo must be an array of user IDs"});
      }
  
      const newTask = await Task.create({
        title,
        description,
        priority,
        assignedTo,
        dueDate,
        createdBy: req.user._id,
        attachments,
        todoChecklist,
      });
  
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }

//des update task by id
//route PUT/api/tasks/:id
//acces Private
const updateTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//des delete task by id (ADMIN ONLY)
//route DELETE/api/tasks/:id
//acces Private
const deleteTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//des Update task status by id
//route PUT/api/tasks/:id/status
//acces Private
const updateTaskStatus = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//des Update task checklist by id
//route PUT/api/tasks/:id/todo
//acces Private
const updateTaskChecklist = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//des Dashboard data(Admin only)
//route PUT/api/tasks/dashboard-data
//acces Private
const getDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//des Dashboard data(User specific)
//route PUT/api/tasks/user-dashboard-data
//acces Private
const getUserDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
  updateTaskStatus,
  updateTaskChecklist,
  getDashboardData,
  getUserDashboardData,
};
