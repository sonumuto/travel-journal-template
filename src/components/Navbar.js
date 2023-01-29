import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
    return(
        <nav className='nav-container'>
            <img src={logo} alt="logo"/>
            <h1>my travel journal.</h1>
        </nav>
    )
}