import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    Swal.fire({
      title: "Success!",
      text: "Log Out Successful",
      icon: "success",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      {" "}
      <button onClick={handleLogout}>Logout</button>{" "}
    </>
  );
};

export default Logout;
