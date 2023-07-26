import React,{Fragment} from 'react';
import { NavLink } from 'react-router-dom';

 const NavBar=()=>{


    return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Note Application
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Main<span class="sr-only"></span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar;

