import React from 'react'
import './header.css'
import logo from '../images/Logo.svg'

const Header = () => {
  return (
    <nav className='header'>
        <h2 className='logo_title'>Knowledge Cafe</h2>
        <div className='h_link'>
        <a href='/shop'>Blogs</a>
        <a href='/order'>Contact</a>
        <a href='/inventory'>Team</a>
        <a href='/login'>Login</a>
        </div>
        
    </nav>
  )
}

export default Header