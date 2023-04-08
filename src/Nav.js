import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show,handleShow] = useState();
     
    const transitionNav=()=>{
        if(window.scrollY>100){
            handleShow(false)
        }
    }
useEffect(()=>{
    window.addEventListener("scroll",transitionNav);
    return ()=> window.removeEventListener("scroll",transitionNav);
},[])
  return (
    <div className={`nav ${show&&'nav_black'} `}>
        <div className='nav_contents'>
             <img className='nav_logo' 
             alt='netflix-logo' 
             src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'/>
             <img className='nav_avatar'
             alt='avatar' 
             src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/>
        </div>
       
    
    </div>
  )
}

export default Nav
