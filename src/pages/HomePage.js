import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../comnponents/Sidebar";
import Navbar from "./../comnponents/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="z-10">
        <Navbar />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="z-10">
          <Sidebar />
        </div>
        <main className="flex-1 p-4 overflow-y-auto  md:ml-64 mt-16">
          <div className="relative z-0">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
