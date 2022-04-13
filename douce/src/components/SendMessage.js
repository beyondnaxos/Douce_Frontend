import React, {useState} from 'react'
import {db , auth} from '../firebase'
import firebase from 'firebase/compat/app'
import { Input , Button } from '@material-ui/core'

function SendMessage({messages}) {

  


  const [msg, setMsg] = useState('')

  async function sendMessage(e) {
      e.preventDefault()
      const { uid, photoURL, displayName } = auth.currentUser

      await db.collection('messages').add({
          text: msg,
          photoURL,
          displayName,
          uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      setMsg('')
      
    
      messages.current.scrollIntoView() 

      


  }
  return (
      <div>
          <form onSubmit={sendMessage}>
              <div className="sendMsg">
                  <Input placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                  <Button  type="submit">Send</Button>
              </div>
          </form>
      </div>
  )
}

export default SendMessage