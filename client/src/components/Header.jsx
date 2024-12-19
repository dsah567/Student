import React from "react";
import { Outlet } from "react-router-dom";

function ss (){

  return (
    <div className="flex flex-row  bg-red-300 h-screen">
    <div className="h-full bg-slate-600 m-auto">01</div>
    <div className="h-full bg-slate-600 m-auto">02</div>
    <div className="h-full bg-slate-600 m-auto">03</div>
  </div>
    
  )
}
const Header = () => {
  return (
    <div className="flex flex-row md:flex-row bg-gray-100 shadow-md h-screen">
    {/* Left Section (Sidebar) */}
    <div className="w-full md:w-1/4 lg:w-1/5 bg-white text-black p-4 text-xl ">
      <h1 className="text-2xl font-bold mb-6">QuyL</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="/dashboard" className="hover:text-gray-300">Dashboard</a>
          </li>
          <li className="mb-4">
            <a href="/" className="hover:text-gray-300">Students</a>
          </li>
          <li className="mb-4">
            <a href="/chapter" className="hover:text-gray-300">Chapter</a>
          </li>
          <li className="mb-4">
            <a href="/help" className="hover:text-gray-300">Help</a>
          </li>
          <li>
            <a href="/settings" className="hover:text-gray-300">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
    {/* Right Section Header */}
    <div className="w-full md:w-3/4 lg:w-4/5 p-4 flex flex-col ">
      <header className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search your course"
          className="w-full md:w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <div className="flex items-center">
          <span className="text-gray-700 font-semibold">Dipu Kumar Sah</span>
        </div>
      </header>

      {/* Other Pages*/ }
        <Outlet/>
    </div>
  </div>
   
  );
};

export default Header;
