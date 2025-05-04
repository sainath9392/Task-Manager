import React, { useContext, useEffect, useState } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import { UserContext } from "../../context/userProvider";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import moment from 'moment';
import { addThousandsSeparator } from "../../utils/helper";
import InfoCard from "../../components/Cards/InfoCard";

const Dashboard = () => {
  useUserAuth();
  const { user } = useContext(UserContext);

  const userName = user?.name || "Guest";

  const navigate = useNavigate();

  const [dashboardData, setDasboardData] = useState(null);
  const [pieChartData, setPieChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);

  function getGreeting() {
    const now = moment();
    const currentHour = now.hour();
  
    if (currentHour >= 6 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  const greeting = getGreeting();

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
              {greeting}! {userName}
            </h2>
            <p className="test-xs md:-[13px] text-gray-400 mt-1.5">{moment().format("dddd Do MMM YYYY")}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-5 ">
        <InfoCard 
        label = "Total Tasks"
        value={addThousandsSeparator(
          dashboardData?.charts?.taskDistribution?.All ||0
        )} 
        color="bg-primary" />
        <InfoCard 
        label = "Pending Tasks"
        value={addThousandsSeparator(
          dashboardData?.charts?.taskDistribution?.Pending ||0
        )} 
        color="bg-red-500" />
        <InfoCard 
        label = "In Progress"
        value={addThousandsSeparator(
          dashboardData?.charts?.taskDistribution?.InProgress ||0
        )} 
        color="bg-yellow-500" />
        <InfoCard 
        label = "Completed Tasks"
        value={addThousandsSeparator(
          dashboardData?.charts?.taskDistribution?.Completed ||0
        )} 
        color="bg-green-500" />
      </div >
      
      </div>
      
    </DashboardLayout>
  );
};

export default Dashboard;
