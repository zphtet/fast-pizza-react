import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import OrderNew, { action as OrederAction } from "./pages/OrderNew";
import Order from "./pages/Order";
import { getMenu } from "./utils/helper";
import Error from "./components/Error";

const wait = (sec: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("Waited for " + sec + " seconds");
    }, sec * 1000);
  });
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: async () => {
          await wait(1);
          return await getMenu();
        },
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <OrderNew />,
        action: OrederAction,
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
