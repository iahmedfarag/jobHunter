import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar.js";
import {
  FaHome,
  FaRegUserCircle,
  FaCaretDown,
  FaAlignLeft,
  FaUserCircle,
} from "react-icons/fa";
import Logo from "./Logo.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleLogoutDropdown,
  toggleSidebar,
  logoutUser,
} from "../features/user/userSlice.js";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className={isDropdownOpen ? "dropdown show-dropdown" : "dropdown"}
          >
            <button
              className="dropdown-btn"
              onClick={() => {
                dispatch(logoutUser());
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
