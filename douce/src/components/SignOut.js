import React from 'react'
import { Button } from '@material-ui/core'
import { auth } from '../firebase'

function SignOut() {


  return (
    <Button onClick={() => {
      auth.signOut()
      .then(() => {
        // go back to contact page 
        
        window.location.href = '/contact'
      })
    }
    }>SignOut</Button>
  )
}

export default SignOut