import React from 'react'
import Logo from './Logo'
import "../styles/Header.css"
import BtnLogOut from './BtnLogOut'

function Header() {
  return (
    <div className='header'>
        <Logo/> 
        <h1>¡WELCOME!</h1>
        <BtnLogOut/>
    </div>
  )
}

export default Header