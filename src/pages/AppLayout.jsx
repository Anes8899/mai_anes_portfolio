import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
