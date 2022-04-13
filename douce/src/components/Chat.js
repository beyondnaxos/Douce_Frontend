import React, { useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'
import '../styles/chat.css'
// import useSound from 'use-sound'
import boop from './boop.mp3'

function Chat() {

  

    const [messages, setMessages] = useState([])

    //run boop once when a new message is added
    // const audio = useRef(null)
    // useEffect(() => {
    //     audio.current = new Audio(boop)
    //     // put the volume at 25%
    //     audio.current.volume = 0.25
    //     audio.current.play()
    // }, [messages])

    // when the messages state is updated, run the sound boop one time 
    // useEffect(() => {
    //     const audio = new Audio(boop)
    //     audio.volume = 0.25
    //     audio.play()
    // }, [messages])

  
    
 

    
    
    console.log(messages)

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
        
        // scrollToBottom()
    }, [])

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);


    return (
        <div className='bg-chat'>
            <SignOut />

            <div className="msgs-container">
                <div className='msgs'>
                    {messages.map(({ id, text, photoURL, uid, displayName}) => (
                        <div className={`msg-container ${uid === auth.currentUser.uid ? 'sent-container' : 'received-container'}`}>
                            <div className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`} key={id}>
                                <img className='msg-photo' src={photoURL} alt="" />
                                <div className={`id-container  ${uid === auth.currentUser.uid ? 'sent-id' : 'received-id'}`}>
                                <p>{displayName}</p>
                                <p className='msg-text'>{text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <div className='send-container'>
            <SendMessage messages={messagesEndRef} />
            </div>
        </div>
    )
}

export default Chat