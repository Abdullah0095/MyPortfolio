import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Menubar = () => {
    return (
     
            <div className="pt-3 mr-3 d-flex justify-content-end">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Link className='nav-link text-success' to='/home'>Home</Link>
                        <Link className='nav-link text-success' to='/projects'>Projects</Link>
                        <NavLink className='nav-link text-success' to='/blogs'>Blogs</NavLink>
                        <NavLink className='nav-link text-success' to='/about'>About me</NavLink>
                        <NavLink className='nav-link text-success' to='/contact'>Contact</NavLink>
                        <NavLink className='nav-link text-success' to='/certificate'>Certificate</NavLink>
                        <Link to="/resume"><button className='resume-btn text-success'>Resume</button></Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
   
    );
};

export default Menubar;