import React from 'react'
import './CSS/navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <h1 id='title'>bill Management</h1>
                <ul>
                    <li className='link'><Link to="/">Home</Link></li>
                    <li className='link'><Link to="/contact">Contact</Link></li>
                    <li className='link'><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar