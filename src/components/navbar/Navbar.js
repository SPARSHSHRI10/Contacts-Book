import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
        <div className='logo'>
            <Link to="/" className='text'>
                Contact App
            </Link>
        </div>
  )
}

export default Navbar
