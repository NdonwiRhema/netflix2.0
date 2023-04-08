import React, { useState } from 'react'
import SignUpScreen from './SignUpScreen'
import "./LoginScreen.css"

function LoginScreen() {
    const[signIn,setSignIn] = useState(false)


  return (
    <div className='loginScreen'>
      <div className='loginScreen_background'> 
        <img className='loginScreen_logo' 
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
        alt=''/>
        <button onClick={()=>setSignIn(true)} className='loginScreen_btn'>Sign In</button>

        <div className='loginScreen_gradient'></div>
      </div>

      <div className='loginScreen_body'>
        {signIn?(
            <SignUpScreen/>
        ):(
            <>
            <h1>Unlimited films, Tv Programmes and more.</h1>
            <h2>Watch Anywhere .Cancel Anytime</h2>
            <h3>
                Ready to watch? Enter your email to create
                 or restart your membership.
            </h3>
            <div className='loginScreen_input'>
                <form>
                    <input type='email' placeholder='Email'/>
                    <button onClick={()=>setSignIn(true)} className='loginScreen_getStarted'>Get Started</button>
                </form>
            </div>
        </>
        )}
        
      </div>
    </div>
  )
}

export default LoginScreen
