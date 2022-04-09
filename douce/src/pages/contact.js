import React from 'react'
import { motion } from "framer-motion";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import Chat from '../components/Chat';
import SignIn from '../components/SignIn';
import '../styles/contact.css'

function Contact() {

    const [user] = useAuthState(auth)
    return (    
        
        <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='cards big-container'>
           
         {user ? <Chat /> :<SignIn />}
           
        <div className='contact-container'>
            <div className='contact-header'>
                {/* texte de contact et phrase d'accroche */}
                <h1>Vous souhaitez prendre rendez-vous ? </h1>
                </div>
                <div className='contact-text'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris euismod, nunc eget consectetur consectetur,
                    nisi nunc ultricies nisi, euismod eget nunc.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                </p>

        
            </div>
            <div className='contact-header'>
                {/* texte de contact et phrase d'accroche */}
                <h1>Vous avec une proposition commerciale? </h1>
                </div>
                <div className='contact-text'>
                <p>
                    Contactez-moi par mail à l'adresse suivante :
                    <br/>
        
                    <p>
                        julie@douce.bio
                    </p>
                </p>

        
            </div>
        </div>
        </motion.div>
        
    );
};

export default Contact;
