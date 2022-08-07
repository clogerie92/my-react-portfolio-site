import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        "id": 0,
        "image": "./images/techtalk.png",
        "title": "TechTalk",
        "description": "This is an application called TechTalk that is similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
        "repo": "https://github.com/clogerie92/TechTalk",
        "deploy": "https://morning-lake-99145.herokuapp.com/"
        
    },
    {
        "id": 1,
        "image": "./images/cheers.png",
        "title": "Cheers",
        "description": "Designed for those who love traveling and trying out local breweries, this application allows the user to enter a city of their choice and returns a 5 day weather forecast along with the top brewery searches in the city that the user has selected.",
        "repo": "https://github.com/kishanshah98/Travel-Guide",
        "deploy": "https://kishanshah98.github.io/Travel-Guide/"
        
    },
    {
        "id": 2,
        "image": "./images/chirp.png",
        "title": "Chirp",
        "description": "This application resembles a 'mock twitter' program in which one can create an account and make posts and comments to interact with others.",
        "repo": "https://github.com/micbrwn/Chirp",
        "deploy": "https://chirp-oneandonly.herokuapp.com/"
        
    },
    {
        "id": 3,
        "image": "./images/notehub.png",
        "title": "NoteHub",
        "description": "This is an application called NoteHub that can be used to write and save notes.",
        "repo": "https://github.com/clogerie92/NoteHub",
        "deploy": "https://the-note-hub.herokuapp.com/"
        
    },
    {
        "id": 4,
        "image": "./images/slicendice.png",
        "title": "Slice-N-Dice",
        "description": "This application is a Pizza ordering app where users can sign up or login to place an order while the employee receives those orders.",
        "repo": "https://github.com/clogerie92/Slice-n-Dice",
        "deploy": "https://project3-slice-n-dice.herokuapp.com/"
        
    },
    {
        "id": 5,
        "image": "/images/weather.png",
        "title": "Weather Dashboard App",
        "description": "A weather dashboard app that uses an api to retrieve weather data for all cities around the world.",
        "repo": "https://github.com/clogerie92/Weather-Dashboard-App",
        "deploy": "https://clogerie92.github.io/Weather-Dashboard-App/"
    }
];

function Portfolio () {
    return projectData.map((data) => <ProjectCard key={data.id} data={data} />);
}

export default Portfolio;