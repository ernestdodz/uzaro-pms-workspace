import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <SideBar />
      <div className="md:pl-64 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
