import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (user) {
    return children;
  }
  return <Navigate to="landing" />;
};

export default ProtectedRoute;
