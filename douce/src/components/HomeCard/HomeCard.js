import React from 'react';
import './HomeCard.scss';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'


const Homecard = (props) => {

    return (
        <motion.div 
        exit={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className='card-container'
        initial={{ opacity: 0 }}
        >
            <div className='card-image-container'>
                <img src={props.img} alt="" />
            </div>
            <div className='card-bloc-text-container'>
                <div className='card-bloc-text-child'>
                    <h1><Typewriter
                        options={{
                            strings: [props.title],
                            autoStart: true,
                            loop: true,
                            pauseFor: 50000,
                        }}
                    /></h1>
                    <p>{props.description}</p>

                </div>
                <div className='onHoverText'>
                    <h2 className='titleHover'> Précisions</h2>
                    <p><Typewriter
                        options={{
                            strings: ['Lorem ipsum, dolor sit amet consectetu dolor, illo dicta corrupti!'],
                            autoStart: true,
                            delay: 10,
                            loop: true,
                            pauseFor: 50000,
                        }}
                    /></p>
                </div>
            </div>

        </motion.div>
    );
}

export default Homecard;
