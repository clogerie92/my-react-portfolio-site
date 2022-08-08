import React from "react";
import githubavatar from "./images/githubavatar.jpeg";
import "./styles/styles.css";

function About () {
    return (
        <div>
            <h2 className="center" id="about-me">About</h2>
            <div className="about-section">
            <img src={githubavatar} alt="portrait" id="my-portrait"/>
                <p id="about-content">
                    Hi! My name is Carl Logerie and I am a passionate full stack
                    software engineer using web technologies to build amazing web
                    applications. I love to create and I use software engineering a tool
                    to solve problems and bring products to life on the internet. I
                    would love to connect with you! Whether it's a job opportunity,
                    project, or just to talk. Feel free to connect with me!
                </p>
            </div>
        </div>
    );
};

export default About;