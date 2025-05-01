const Task = require("../models/Task");

//des Get all tasks (Admin:All, User: assigned tasks)
//route GET/api/tasks
//acces Private
const getTasks = async (req, res) => {
  try {
    const { status } = req.query;
    let filter = {};

    if (status) {
      filter.status = status;
    }

    let tasks;

    if (req.user.role == "admin") {
      tasks = await Task.find(filter).populate(
        "assignedTo",
        "name email profileImageUrl"
      );
    } else {
      tasks = await Task.find({ ...filter, assignedTo: req.user._id }).populate(
        "assignedTo",
        "name email profileImageUrl"
      );
    }

    //Add complete todoChecklist count to each task
    tasks = await Promise.all(
      tasks.map(async (task) => {
        const completedCount = task.todoChecklist.filter(
          (item) => item.completed
        ).length;
        return { ...task._doc, completedToCount: completedCount };
      })
    );

    //Status summary counts
    const allTasks = await Task.countDocuments(
      req.user.role === "admin" ? {} : { assignedTo: req.user._id }
    );

    const pendingTasks = await Task.countDocuments({
      ...filter,
      status: "Pending",
      ...(req.user.role != "admin" && { assignedTo: req.user._id }),
    });

    const inProgressTasks = await Task.countDocuments({
      ...filter,
      status: "In pending",
      ...(req.user.role != "admin" && { assignedTo: req.user._id }),
    });

    const completedTasks = await Task.countDocuments({
      ...filter,
      status: "Completed",
      ...(req.user.role != "admin" && { assignedTo: req.user._id }),
    });

    res.json({
      tasks,
      statusSummary: {
        all: allTasks,
        pendingTasks,
        inProgressTasks,
        completedTasks,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//des Get task by id
//route GET/api/tasks/:id
//acces Private
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate(
      "assignedTo",
      "name email profileImageUrl"
    );
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//des create task (Admin only)
//route POST/api/tasks/
//acces Private
const createTask = async(req, res) => {
  try {
    const {
      title,
      description,
      priority,
      assignedTo,
      dueDate,
      attachments,
      todoChecklist,
    } = req.body;

    if (!title || !description || !assignedTo || !dueDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.user || !req.user._id) {
      return res
        .status(401)
        .json({ message: "Unauthorized: User information is missing" });
    }

    if (!Array.isArray(assignedTo)) {
      return res
        .status(400)
        .json({ message: "assignedTo must be an array of user IDs" });
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
