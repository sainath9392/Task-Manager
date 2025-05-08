
export const BASE_URL = "https://task-manager-ya1t.onrender.com"; // Replace with your server URL

//utils/apiPaths.js
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", //Register a new user(Admin or member)
    LOGIN: "/api/auth/login", //Authenticate user and return JWT token
    GET_PROFILE: "/api/auth/profile", //Get logged-in user details
  },

  USERS: {
    GET_ALL_USERS: "/api/users", //Get all users (Admin only)
    GET_USER_BY_ID: (userId) => `/api/users/${userId}`, //Get user by Id
    CREATE_USER: "/api/users", //Create a new user (Admin Only)
    UPDATE_USER: (userId) => `/api/users/${userId}`, //Update user details
    DELETE_USER: (userId) => `/api/users/${userId}`,
  },

  TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", //Get Dashboard Data
    GET_USER_DASHBOARD_DATA: "api/tasks/user-dashboard-data", //Get User Dashboard
    GET_ALL_TASKS: "/api/tasks", //Get all tasks(Admin:all,User:only assigned)
    GET_TASKS_BY_ID: (taskId) => `/api/tasks/${taskId}`, //Get task by ID
    CREATE_TASK: "api/tasks", //Create a new Task(Admin only)
    UPDATE_TASK: (taskId) => `api/tasks/${taskId}`, //Update task details
    DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, //Delete a task(Admin only)

    UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, //Update task details
    UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`, //Update todo checklist
  },

  REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks", //Download all tasks as an Excel format
    EXPORT_USERS: "/api/reports/export/users", //Download user-task report
  },
  IMAGE: {
    UPLOAD_IMAGE: "api/auth/upload-image",
  },
};
