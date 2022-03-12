import React from "react";
import { Link } from "react-router-dom";
import "./PilotScreen.css";

const PilotScreen = ({ location }) => {
  const pilot = location.state;
  return (
    <div className="PilotScreen">
      {pilot ? (
        <div className="PilotScreen-pilot">
          <span>NAME:</span>
          <span>{pilot.name}</span>
          <span>MODEL:</span>
          <span>{pilot.model}</span>
          <Link to="/">RETURN</Link>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default PilotScreen;
