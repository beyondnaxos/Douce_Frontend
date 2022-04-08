import React from 'react'
import { motion } from "framer-motion";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import Chat from '../components/Chat';
import SignIn from '../components/SignIn';

function Contact() {

    const [user] = useAuthState(auth)
    return (    
        
        <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='cards'>

         {user ? <Chat /> :<SignIn />}

        </motion.div>
        
    );
};

export default Contact;
