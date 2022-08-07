import React from "react";

function ProjectCard({ data }) {
  return (
    <ul className="list-group">
      <div className="card">
        <img src={data.image} className="card-img-top" alt="project screenshot" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
        </div>
        <div className="card-body">
          <a href={data.repo} className="card-link" rel="noreferrer" target="_blank">
            Repo
          </a>
          <a href={data.deploy} className="card-link" rel="noreferrer" target="_blank">
            Deploy
          </a>
        </div>
      </div>
    </ul>
  );
}

export default ProjectCard;