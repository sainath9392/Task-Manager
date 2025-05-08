import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
    if(!isOpen) return;
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/20 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Model Content */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          {/* Model Header */}

          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200 ">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 lnline-flex justify-center items-center dark:bg-gray-600 dark:hover:text-white cursor-pointer"
              onClick={onClose}
            >
              <svg
                width="32"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          {/* Model Body */}
          <div className="p-4 md:p-5 space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
