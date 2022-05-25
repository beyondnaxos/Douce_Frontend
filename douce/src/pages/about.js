import React from "react";
import SliderAbout from "../components/Slider/SliderAbout";
import { motion } from "framer-motion";

const About = () => {

    

    return (
        <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
        <div className="cards-about">
         
            <SliderAbout />
        </div>
        </motion.div>
    );
};

export default About;