import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token"); // Check if user is logged in
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      Swal.fire({
        title: "Access Denied!",
        text: "You need to log in gain Access",
        icon: "warning",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login"); // Redirect to login page
        }
      });
    }
  }, [token, navigate]);

  return token ? element : null; // Only render if the user is logged in
};

export default ProtectedRoute;
