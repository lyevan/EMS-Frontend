import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated on mount (HttpOnly cookies will be sent automatically)
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Make a request to verify authentication (cookies will be sent automatically)
        const response = await axios.post("/users/verify");
        if (response.data) {
          setUser(response.data); // Should contain {role, username, employee_id}
        }
      } catch (error) {
        console.log("User not authenticated");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = (userData) => {
    // Store user data in state (role, username, employee_id)
    setUser(userData);
  };

  const logout = async () => {
    try {
      await axios.post("/users/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
    }
  };
  const hasRole = (requiredRole) => {
    return user?.role === requiredRole;
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        hasRole,
        isAuthenticated,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export default AuthContext;
