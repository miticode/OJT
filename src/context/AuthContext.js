import React, { createContext, useContext, useState } from "react";
import {jwtDecode} from "jwt-decode"; // Sửa import đúng cú pháp

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Error decoding token:", error.message);
      setUser(null); // Xóa user nếu không thể giải mã token
      localStorage.removeItem("token");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
