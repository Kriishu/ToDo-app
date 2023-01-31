import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Welcome to my Accenture Project</h1>
      <p>Here You Can See React app progress.</p>
      <p>Also Here you can leave a Submission: </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Leave a Submission
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
