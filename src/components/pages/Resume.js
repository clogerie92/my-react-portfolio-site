import React from "react";
import pdf from "../pages/images/Resume_1.pdf";

function Resume () {
    return (
        <div className="row resume-page">
            <h2 id="resume-header">Resume</h2>
             
            <a href={pdf} rel="noreferrer" target="_blank">
                <span id="resume-download">Download My Resume</span>
            </a>
                
                <h2>Proficiencies</h2> 
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>React</li>
                    <li>GraphQL</li>
                </ul>
        </div>
    );
};

export default Resume;