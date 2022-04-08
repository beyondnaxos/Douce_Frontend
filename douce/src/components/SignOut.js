import React from 'react'
import {Button} from '@material-ui/core'
import {auth} from '../firebase'

function SignOut() {


  return (
    <Button onClick={() => auth.signOut()}>SignOut</Button>
  )
}

export default SignOut