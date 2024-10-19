import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<ProjectForm />} />
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
