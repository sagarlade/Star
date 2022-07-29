import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Star<strong className="tech">Techno</strong></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mx-auto mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                                <NavLink to="/" className="btn btn-outline-dark">
                                    <i className="fa-solid fa-right-to-bracket me-1"></i>Login
                                </NavLink>
                                <NavLink to="/" className="btn btn-outline-dark ms-2">
                                    <i className="fa-solid fa-user-plus mw-1"></i> Sign up
                                </NavLink>
                            </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;