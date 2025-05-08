import React from "react";

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
 
        <p className="dark:text-white">{content}</p>
      

      <div className="mt-6 flex justify-end">
        <button
          className="text-rose-500 dark:bg-gray-500 dark:hover:bg-rose-50 dark:border-rose-500/10 dark:hover:text-rose-500  dark:border-white-500/10 dark:text-white bg-rose-50 px-3 py-1 rounded-lg border border-rose-500/10 "
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
