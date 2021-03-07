import React from 'react';
import api from '../Assets/Icons/api.svg'
import backend from '../Assets/Icons/backend.svg'
import algo from '../Assets/Icons/algo.svg'
import computer from '../Assets/Icons/computer.svg'
import repair from '../Assets/Icons/repair.svg'
import puzzle from '../Assets/Icons/puzzle.svg'

import Skillcard from './Skillcard';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "building scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using and SQL and No-SQL",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API using django-rest-api "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in HackerRank and Leetcode"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using figma and  framer"
    },
    {
        icon: computer,
        title: "Whatever",
        about: "sit amet consectetur adipisicing elit. Hic quis minima autem!"
    },
]


const About = () => {
    return (
        <div className="about">
            {/* <h6 className="about__intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6> */}
            {/* <div className="container about__container">
                <h6 className="about__heading">What I offer</h6> */}
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />
                        )
                    }
                </div>
            </div>
        // </div>
    );
};

export default About;