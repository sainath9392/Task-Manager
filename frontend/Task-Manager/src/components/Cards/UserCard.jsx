import React from "react";

const UserCard = ({ userInfo }) => {
  return (
    <div className="user-card p-2">
      <div>
        <img
        loading="lazy"
          className="w-12 h-12 rounded-full border-2 border-white"
          src={userInfo?.profileImageUrl}
          alt="Avatar"
        />
        <div>
          <p className="text-sm font-medium">{userInfo?.name}</p>
          <p className="text-xs text-gray-500">{userInfo.email}</p>
        </div>
      </div>
      <div className="flex items-end gap-3 mt-5">
        <StatCard
         label="Pending"
         count={userInfo?.pendingTasks || 0} 
         status="Pending"
         />
        <StatCard
         label="In Progress"
         count={userInfo?.inProgressTasks || 0} 
         status="In Progress"
         />
        <StatCard
         label="Completed"
         count={userInfo?.completedTasks || 0} 
         status="Completed"
         />
      </div>
    </div>
  );
};

export default UserCard;

const StatCard =({label,count,status})=>{
    const getStatusTagColor = () => {
        switch (status) {
          case "In Progress":
            return "text-cyan-500 bg-cyan-50";
          case "Completed":
            return "text-lime-500 bg-lime-50";
          default:
            return "text-voilet-500 bg-violet-50";
        }
      };
    return <div className={`flex-1 text-[10px] font-medium ${getStatusTagColor()} px-4 py-0.5 rounded`}>
        <span className="text-[12px] font-semibold">{count}</span> <br /> {label}
    </div>
}