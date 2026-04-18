import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#faf4ec] text-black font-inter">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;