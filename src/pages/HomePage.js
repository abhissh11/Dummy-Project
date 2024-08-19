import React from "react";
import Navbar from "../comnponents/Navbar";
import Sidebar from "../comnponents/Sidebar";
import ProductDetailsPage from "./ProductDetailsPage";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-1">
        <div className="">
          <Sidebar />
        </div>
        <main className="flex-1 ml-64 p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <ProductDetailsPage />
        </main>
      </div>
    </div>
  );
}
