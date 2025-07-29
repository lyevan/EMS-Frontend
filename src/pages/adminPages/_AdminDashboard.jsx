import React from "react";
// import { useAuth } from "../../contexts/authContext";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router";

const AdminDashboard = () => {
  // const { user } = useAuth();

  return (
    <div className="flex h-screen w-screen">
      {/* Fixed Sidebar - always visible for admins */}

      <Sidebar />

      {/* Dynamic Content Area - renders child routes */}
      <div className="flex-1 p-4 bg-base-300">
        <div className="flex-1 p-2 bg-base-100 rounded-md h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
