import React, { useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'
import '../styles/chat.css'

function Chat() {


    const [messages, setMessages] = useState([])
    console.log(messages)

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);


    return (
        <div className='bg-chat'>
            <SignOut />
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div className={`msg-container ${uid === auth.currentUser.uid ? 'sent-container' : 'received-container' }`}>
                        <div className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received' }`} key={id}>
                            <img className='msg-photo' src={photoURL} alt="" />
                            <p className='msg-text'>{text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <SendMessage messages={messagesEndRef}/>
            <div ref={messagesEndRef} />
        </div>
    )
}

export default Chat