import React from "react";
import UI_IMG from "../../assets/images/UI_IMG.png";
const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black lg:text-2xl">Task Manager</h2>
        {children}
      </div>
      <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-[url('/bg-img.png')] bg-cover bg-no-repeat bg-center overflow-hidden p-8 ">
        <img src={UI_IMG} alt="" className="w-64 lg:w-[90%]" loading="lazy" />
      </div>
    </div>
  );
};

export default AuthLayout;
