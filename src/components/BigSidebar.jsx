import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar.js";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
