import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  // Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If route requires admin but user is not admin
  if (role === "admin" && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
