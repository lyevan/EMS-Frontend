import React from "react";
import { Outlet, Navigate } from "react-router";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to the authentication page if the user is not logged in
    const user = localStorage.getItem("token");
    if (!user) {
      navigate("/auth");
    } else {
      navigate("/dashboard");
    }
  });
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
