import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // Importing the Dashboard
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/submit"
            element={<ProtectedRoute element={<ProjectForm />} />}
          />{" "}
          {/* Protecting the submit route */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          {/* Dashboard route */}
          <Route path="/submit" element={<ProjectForm />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />{" "}
          {/* Protecting the dashboard route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
