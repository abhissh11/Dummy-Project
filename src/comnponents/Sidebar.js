import React from "react";

export default function Sidebar() {
  return (
    <aside
      className="w-64 bg-gray-800 h-screen p-4 top-16 fixed overflow-auto custom-scrollbar pb-20 "
      style={{
        scrollbarThumbRadius: "9999px",
        scrollbarThumbColor: "#6B7280",
      }}
    >
      <h2 className="text-white text-xl mb-4">Pages</h2>
      <ul>
        <li className="text-white py-2 hover:bg-gray-700 cursor-pointer">
          Products
        </li>
        <li className="text-white py-2 hover:bg-gray-700 cursor-pointer">
          Compare Products
        </li>
      </ul>
    </aside>
  );
}
