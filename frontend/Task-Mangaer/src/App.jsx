import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

import PrivateRoute from "./routes/PrivateRoute";

import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";

import UserDashboard from "./pages/User/UserDashboard";
import MyTasks from "./pages/User/MyTasks";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>

          {/*Admin Routes*/}
          <Route element = {<PrivateRoute allowedRoutes = {["admin"]}></PrivateRoute>}>
            <Route path="/admin/dashboard" element={<Dashboard />}></Route>
            <Route path="/admin/tasks" element={<ManageTasks></ManageTasks>}></Route>
            <Route path="/admin/create-task" element={<CreateTask></CreateTask>}></Route>
            <Route path="/admin/users" element={<ManageUsers></ManageUsers>}></Route>
          </Route>

          {/*User Routes*/}
          <Route element = {<PrivateRoute allowedRoles = {["admin"]}></PrivateRoute>}>
            <Route path="/user/dashboard" element={<UserDashboard></UserDashboard>}></Route>
            <Route path="/user/tasks" element = {<MyTasks></MyTasks>}></Route>
            <Route path="/user/tasks-details/:id" element = {<ViewTaskDetails></ViewTaskDetails>}></Route>
            
          </Route>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
