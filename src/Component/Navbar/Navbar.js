import React from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
function Navbar() {
    return (
        <Router>

        <div className="navbar">
            <div className="navbar_logo">MyNotes</div>
            <ul className='navbar_content'>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Contact us</Link></li>
                <l1><Link to="/">SignIn</Link></l1>                
            </ul>
        </div>
        </Router>
    )
}

export default Navbar
