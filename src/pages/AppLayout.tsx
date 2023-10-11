import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import CartOverview from "../components/CartOverview";
function AppLayout() {
  return (
    <div className="h-screen bg-main grid grid-rows-[auto_1fr_auto]">
      <Header />

      <div className="p-1 sm:p-2 main overflow-y-scroll scroll-w-0">
        <Outlet />
      </div>

      {/* <p className="py-10">Footer</p> */}
      <CartOverview />
    </div>
  );
}

export default AppLayout;
