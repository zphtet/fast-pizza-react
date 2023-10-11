import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import OrderNew from "./pages/OrderNew";
import Order from "./pages/Order";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <OrderNew />,
      },
      {
        path: "/order/:id",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
