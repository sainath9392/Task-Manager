import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
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
import UserProvider, { UserContext } from "./context/userProvider";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>

            {/*Admin Routes*/}
            <Route
              element={<PrivateRoute allowedRoutes={["admin"]}></PrivateRoute>}
            >
              <Route path="/admin/dashboard" element={<Dashboard />}></Route>
              <Route
                path="/admin/tasks"
                element={<ManageTasks></ManageTasks>}
              ></Route>
              <Route
                path="/admin/create-task"
                element={<CreateTask></CreateTask>}
              ></Route>
              <Route
                path="/admin/users"
                element={<ManageUsers></ManageUsers>}
              ></Route>
            </Route>

            {/*User Routes*/}
            <Route
              element={<PrivateRoute allowedRoles={["admin"]}></PrivateRoute>}
            >
              <Route
                path="/user/dashboard"
                element={<UserDashboard></UserDashboard>}
              ></Route>
              <Route path="/user/tasks" element={<MyTasks></MyTasks>}></Route>
              <Route
                path="/user/tasks-details/:id"
                element={<ViewTaskDetails></ViewTaskDetails>}
              ></Route>
            </Route>

            {/* Default Route */}
            <Route path="/" element={<Root />}></Route>
          </Routes>
        </Router>
      </div>

      <Toaster toastOptions={{
        className:"",
        style:{
          fontSize:"13px",
        },
      }}
      />
    </UserProvider>
  );
};

export default App;

const Root = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) return <Outlet />;
  if (!user) {
    return <Navigate to="/login" />;
  }
  return user.role === "admin" ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <Navigate to="/user/dashboard" />
  );
};
