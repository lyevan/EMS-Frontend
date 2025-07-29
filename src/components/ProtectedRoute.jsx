import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/authContext";

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user, isAuthenticated, hasRole, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  if (!isAuthenticated()) {
    return <Navigate to="/auth" replace />;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
