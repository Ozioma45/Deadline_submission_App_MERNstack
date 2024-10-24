// src/components/Dashboard.jsx
import React from "react";
import Logout from "../components/Logout";

const Dashboard = () => {
  return (
    <div className="text-white">
      <h1>Welcome to Your Dashboard!</h1>
      <p>
        This is a placeholder page for users after logging in or registering.
      </p>
      <Logout />
    </div>
  );
};

export default Dashboard;
