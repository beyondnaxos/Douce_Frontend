import React from "react";

import HomeCard from "../components/HomeCard/HomeCard";
import Feuille from "../assets/feuille.jpg";
import Eau from "../assets/eau.jpg";

const About = () => {

    const aboutArray = [{
        img: Eau,
        title: "Quoi ?",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.'
    }, {
        img: Feuille,
        title: "Qui ?",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.'
    }, {
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: "Comment ?",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.'
    }, {
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: "Pourquoi ?",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.'
    }
]


    return (
        <div className="bg-about">
            <div className="about-container">
                {aboutArray.map((about, index) => {
                    return <HomeCard key={index} img={about.img} title={about.title} description={about.description} />
                })}
                            </div>
        </div>

    );
};

export default About;