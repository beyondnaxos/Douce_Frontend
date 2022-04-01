import React from 'react'
import { motion } from "framer-motion";
function Contact() {
    return (    
        
        <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='cards'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti incidunt quis dicta possimus numquam laborum alias doloribus magni animi nesciunt officiis eveniet ullam dolore repellendus obcaecati, ea molestiae mollitia. Officiis deserunt, eum molestiae rem neque magnam minima, ex ratione dolorum possimus ut ipsa natus quae? Obcaecati non amet optio ut.</p>
        </motion.div>
        
    );
};

export default Contact;
