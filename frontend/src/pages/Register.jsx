import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    portfolio: "",
    github: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    profilePicture: null,
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) =>
      formDataObj.append(key, formData[key])
    );

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setSuccessMsg(res.data.msg); // Show success message
      setErrorMsg(""); // Clear any previous error messages
    } catch (err) {
      console.log(err.response); // Log full error response for debugging

      // Ensure error message is properly captured
      if (err.response && err.response.data && err.response.data.msg) {
        setErrorMsg(err.response.data.msg);
      } else {
        setErrorMsg("Something went wrong");
      }

      setSuccessMsg(""); // Clear any success messages
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <input
        type="url"
        name="portfolio"
        placeholder="Portfolio URL"
        onChange={handleChange}
      />
      <input
        type="url"
        name="github"
        placeholder="GitHub Profile"
        onChange={handleChange}
      />
      <input
        type="url"
        name="instagram"
        placeholder="Instagram Handle"
        onChange={handleChange}
      />
      <input
        type="url"
        name="linkedin"
        placeholder="LinkedIn Profile"
        onChange={handleChange}
      />
      <input
        type="url"
        name="twitter"
        placeholder="Twitter Handle"
        onChange={handleChange}
      />
      <input type="file" name="profilePicture" onChange={handleFileChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
