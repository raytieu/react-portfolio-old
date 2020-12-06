import React from "react";
import './Portfolio.css';
import ToMakeImg from '../images/to-make-or-to-go.PNG';
import WeatherImg from '../images/weather.png';
import PlannerImg from '../images/day-planner.png';
import QuizImg from '../images/code-quiz.PNG';
import StocksImg from '../images/bootstocks.PNG';
import SpentSmartImg from '../images/spent-smart.PNG';
import Project from '../components/Project';

function Portfolio() {
  return (
    <div>
      <h1 className="portfolio-title">Raymond's Portfolio</h1>

      <div className="album py-5" id="album">
        <div className="container-fluid">
          <div className="row">
            <Project 
              image={ToMakeImg} 
              alt={"To Make or To Go"}
              title={"To Make or To Go"}
              github={"https://github.com/raytieu/to-make-or-to-go"} 
              deploy={"https://raytieu.github.io/to-make-or-to-go/"} 
            />
            <Project 
              image={WeatherImg} 
              alt={"Weather Dashboard"}
              title={"Weather Dashboard"}
              github={"https://github.com/raytieu/weather-dashboard"} 
              deploy={"https://raytieu.github.io/weather-dashboard/"} 
            />
            <Project 
              image={PlannerImg} 
              alt={"Day Planner"}
              title={"Day Planner"}
              github={"https://github.com/raytieu/day-planner"} 
              deploy={"https://raytieu.github.io/day-planner/"} 
            />
            <Project 
              image={QuizImg} 
              alt={"Code Quiz"}
              title={"Code Quiz"}
              github={"https://github.com/raytieu/code-quiz"} 
              deploy={"https://raytieu.github.io/code-quiz/"} 
            />
          </div>  
          <div className="row">
            <Project 
              image={StocksImg} 
              alt={"BootStocks"}
              title={"BootStocks"}
              github={"https://github.com/raytieu/BootStocks"} 
              deploy={"http://bootstocks.herokuapp.com/"} 
            />
            <Project 
              image={SpentSmartImg} 
              alt={"Spent Smart"}
              title={"Spent Smart"}
              github={"https://github.com/raytieu/spent-smart"} 
              deploy={"http://spentsmart.herokuapp.com/"} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;