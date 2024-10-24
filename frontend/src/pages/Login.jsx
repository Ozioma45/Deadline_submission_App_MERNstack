import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://deadline-submission-app-mernstack.onrender.com/api/auth/login",
        formData
      );
      localStorage.setItem("token", res.data.token);
      Swal.fire({
        title: "Success!",
        text: res.data.msg,
        icon: "success",
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.msg || "An error occurred!",
        icon: "error",
      });
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
