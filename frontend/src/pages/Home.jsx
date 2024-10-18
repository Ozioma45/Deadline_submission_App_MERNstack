import React from "react";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";

const Home = () => {
  const submissionDeadline = "2024-12-31T23:59:59"; // Set your deadline

  return (
    <div>
      <h1>Project Submission Portal</h1>
      <Countdown deadline={submissionDeadline} />
      <Link to="/submit">
        <button>Click to submit project</button>
      </Link>
      <Link to="/projects">
        <button>Click to see other submitted projects</button>
      </Link>
    </div>
  );
};

export default Home;
