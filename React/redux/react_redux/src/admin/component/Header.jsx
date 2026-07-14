import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="p-5 bg-primary text-white text-center">
                <h1>CRUD USING REACT REDUX TOOLKIT</h1>
                <p>React Redux toolkit!</p>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add_user">Add User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage_user">Manage User</NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink className="nav-link" to="/add_contact">Add Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage_contact">Manage Contact</NavLink>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header