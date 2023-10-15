import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import CartOverview from "../components/CartOverview";
import { useNavigation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="h-screen bg-main grid grid-rows-[auto_1fr_auto]">
      {isLoading && (
        <div className="absolute w-screen h-screen bg-gray-300 opacity-80 backdrop-blur grid place-items-center">
          <CirclesWithBar color="#e0e33b" />
        </div>
      )}
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
