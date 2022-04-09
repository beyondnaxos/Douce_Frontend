import React from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase'
import { Button } from '@material-ui/core'
import sand from './sand.webp'


function SignIn() {

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <div className='big-signin-container'>
      <div className="signin-container">
        <div className='signin-info'>
          <h1>Messagerie instantanée</h1>
          <p> Connectez vous afin d'accéder à la messagerie instantanée :)</p>
        </div>
    <div className='btn-signin'>
    <Button className='signin' onClick={signInWithGoogle}>Se connecter avec google<br/> pour m'écrire</Button>
    </div>
    {/* div de 150px de haut avec une photo zen en objectif-fit cover */}
    <div className='zen-container'>
      
    </div>

    </div >
    </div>
  )
}

export default SignIn