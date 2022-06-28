import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
  const user = window.localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};
export default function ProtectedRoutes({ children }) {
  const auth = useAuth();
  return auth ? children (<Outlet />) : <Navigate to="/login" />;
}
