import React from "react";
import { Outlet } from "react-router-dom";
import { Stats, Profile, AllJobs, AddJob } from "./";
import { Navbar, BigSidebar, SmallSidebar } from "../../components/";
import Wrapper from "../../assets/wrappers/SharedLayout.js";
const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />

          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default DashboardLayout;
