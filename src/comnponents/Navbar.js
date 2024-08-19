import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 fixed top-0 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Shop</h1>
        <div>
          <a href="#home" className="text-white mx-4">
            Home
          </a>
          <a href="#products" className="text-white mx-4">
            Products
          </a>
          <a href="#contact" className="text-white mx-4">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
