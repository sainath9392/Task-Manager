import React from "react";

const TaskCard = (
  title,
  description,
  priority,
  status,
  progress,
  createdAt,
  dudeDate,
  assignedTo,
  attachmentCount,
  completedTodoCount,
  todoChecklist,
  onClick
) => {
  const getStatusTagColor = () => {
    switch (status) {
      case "In Progress":
        return "text-cyan-500 bg-cyan-50 border border-syan-500/10";
      case "Completed":
        return "text-lime-500 bg-lime-50 border border-lime-500/20";
      default:
        return "text-voilet-500 bg-violet-50 border border-violet-500/10";
    }
  };
  const getPrioritytagColor = () => {
    switch (priority) {
      case "Low":
        return "text-emrald-500 bg-emerald";
      case "Medium":
        return "text-amber-500 bg-amber-50 border border-amber-500/10";
        default:
            return "text-rose-500 bg-rose-50 border border-rose-500/10"
    }
  };
  return <div>TaskCard</div>;
};

export default TaskCard;
