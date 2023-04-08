import React, { useRef,} from 'react'
import "./SignUpScreen.css"
import Authenticate from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null)

  const Register = ()=>{
           createUserWithEmailAndPassword(Authenticate,
              emailRef.current.value,
              passwordRef.current.value
              ).then((user)=>console.log(user))
              .catch((error)=>alert(error.message))
           
  }
  const signIn = (e)=>{
            e.preventDefault();
          signInWithEmailAndPassword(Authenticate,
            emailRef.current.value,passwordRef.current.value)
            .then((user)=>console.log(user))
            .catch((err)=>alert(err.message))

             
  }

  return (
    <div className='signupScreen'>
      <form onSubmit={signIn}>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email'/>
        <input ref={passwordRef} placeholder='password' type='password'/>
        <button type='submit' >Sign In</button>
        <h4><span className='signupScreen_gray'>New to Netflix? </span>
        <span className='signupScreen_link' onClick={Register}> Sign Up now</span></h4>
      </form>
    </div>
  )
}

export default SignUpScreen
