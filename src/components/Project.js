import React from "react";
import './Project.css';

function Project(props) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card mb-4 box-shadow">
        <img className="card-img-top image img-fluid" src={props.image} alt={props.alt} />
        <div className="card-body">
          <p className="card-text">{props.title}</p>     
          <a href={props.github} target="_blank" rel="noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">GitHub</button></a>
          <a href={props.deploy} target="_blank" rel="noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">Website</button></a> 
        </div>
      </div>
    </div>
  );
}

export default Project;