import React from "react";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductPage from "./pages/ProductDetailsPage";
import NotFound from "./pages/NotFound";
import ComparePage from "./pages/ComparePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <ProductPage />,
      },
      {
        path: "/compare-page",
        element: <ComparePage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
