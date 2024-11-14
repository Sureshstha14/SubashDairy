import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
import logo from '../Images/dairyLogo.png'; // Adjust the path according to your structure
import { Dropdown } from 'react-bootstrap';
// import { Link } from 'react-alice-carousel';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light font-mono font-2xl">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" href="/">
                    <img src={logo} alt="Logo" className="d-inline-block align-text-top w-12 h-12 me-2" />
                    <span className="text-2xl font-mono">HamroDairy</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"   
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="flex justify-normal w-4/5 " id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <Link className="nav-link active hover:bg-blue-300 " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link hover:bg-blue-300" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link hover:bg-blue-300" to="/contact" tabIndex="-1">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="dropdown-basic">
                                    Services
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/">Action</Dropdown.Item>
                                    <Dropdown.Item href="/">Another action</Dropdown.Item>
                                    <Dropdown.Item href="/">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
