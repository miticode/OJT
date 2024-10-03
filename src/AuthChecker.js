// AuthChecker.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const AuthChecker = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null; // or loading indicator
  }

  return children;
};

export default AuthChecker;
