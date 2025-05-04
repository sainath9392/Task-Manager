import React, { useContext, useEffect, useState } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import { UserContext } from "../../context/userProvider";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import {moment} from 'moment'

const Dashboard = () => {
  useUserAuth();
  const { user } = useContext(UserContext);

  const userName = user?.name || "Guest";

  const navigate = useNavigate();

  const [dashboardData, setDasboardData] = useState(null);
  const [pieChartData, setPieChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);

  const getDashboardData = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.TASKS.GET_DASHBOARD_DATA
      );
      if (response.data) {
        setDasboardData(response.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getDashboardData();
    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="card my-5">
        <div className="">
          <div className="col-span-3">
            <h2 id="greeting-text" className="text-xl md:text-2xl">
              Good Morning! {userName}
            </h2>
            <p className="test-xs md:-[13px] text-gray-400 mt-1.5">{moment().format("dddd Do MMM YYYY")}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
