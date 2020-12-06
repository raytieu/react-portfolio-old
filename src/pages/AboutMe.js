import React from "react";
import Resume from "../images/resume.pdf"
import './AboutMe.css';

function AboutMe() {
  return (
    <div>
      <div className="container about-me">

        <div className="card">

          <div className="row" style={{margin: "10px"}}>
            <div className="col-md-12">
              <h1>About Me</h1>
              <hr />
            </div>
          </div> 

          <div className="row" style={{margin: "10px", marginBottom: "30px"}}>
            <div className="col-sm-6 col-lg-4">
              <img src="../images/about-pic.jpg" alt="Raymond Tieu" className="img-fluid" style={{border: "solid 3px black"}} />
            </div>
            <div className="col-sm-6 col-lg-4">
              <p style={{marginTop: "10px"}}>Hi, I'm Raymond and welcome to my portfolio page.  I am attending the Coding Boot Camp at UCI and aspire to be a web developer/software engineer.  I previously graduated from UCI with a B.A. in Business Economics.  My hobbies include dabbling into personal finance topics and playing in recreational basketball leagues with my friends.</p>
              <p><strong>Projects and More Info:</strong></p>
              <ul>
                <li><a href="https://github.com/raytieu" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/raymond-tieu-b82676184/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href={Resume} target="_blank" rel="noreferrer">Resume</a></li>
              </ul>
              <p>
                <strong>Phone: </strong><a href="tel:626-487-7380">(626) 487-7380</a>
                <br />
                <strong>E-mail: </strong><a href="mailto:ray.tieu@gmail.com">ray.tieu@gmail.com</a>
              </p>
            </div>  
        </div>

      </div>
      </div> 
    </div>
  );
}

export default AboutMe;