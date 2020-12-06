import React from "react";
import './Portfolio.css';
import Project from '../components/Project';

function Portfolio() {
  return (
    <div>
      <h1 className="portfolio-title">Raymond's Portfolio</h1>

      <div className="album py-5" id="album">
        <div className="container-fluid">
          <div className="row">
            <Project 
              image={"../images/to-make-or-to-go.PNG"} 
              alt={"To Make or To Go"}
              github={"https://github.com/raytieu/to-make-or-to-go"} 
              deploy={"https://raytieu.github.io/to-make-or-to-go/"} 
            />
            <Project 
              image={"../images/weather.png"} 
              alt={"Weather Dashboard"}
              github={"https://github.com/raytieu/weather-dashboard"} 
              deploy={"https://raytieu.github.io/weather-dashboard/"} 
            />
            <Project 
              image={"../images/day-planner.png"} 
              alt={"Day Planner"}
              github={"https://github.com/raytieu/day-planner"} 
              deploy={"https://raytieu.github.io/day-planner/"} 
            />
            <Project 
              image={"../images/code-quiz.PNG"} 
              alt={"Code Quiz"}
              github={"https://github.com/raytieu/code-quiz"} 
              deploy={"https://raytieu.github.io/code-quiz/"} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;