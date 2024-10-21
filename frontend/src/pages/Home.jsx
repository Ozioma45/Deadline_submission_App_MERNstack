import React from "react";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";

const Home = () => {
  const submissionDeadline = "2024-10-25T23:59:59"; // Set your deadline

  return (
    <div className="text-center my-5 text-white">
      <h1 className="display-4">Project Submission Portal</h1>
      <h2>Submission Date: 25th October, 2024</h2>
      <div className="mt-4">
        <Countdown deadline={submissionDeadline} />
        <Link to="/submit">
          <button className="btn btn-primary mx-2">
            Click to submit project
          </button>
        </Link>
        <Link to="/projects">
          <button className="btn btn-secondary mx-2">
            Click to see other submitted projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
