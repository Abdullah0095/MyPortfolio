import React from 'react';
import { Link } from 'react-router-dom';
import headerBg from '../../../images/header-bg2.png'
import resume from '../../../images/resume of ABDULLAH AL MIZAN.pdf';

const Header = () => {
    return (
        <div className="header-bg">
            <div className="mr-3">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-5">
                        <img className="mt-n4 img-fluid" src={headerBg} alt="" />
                    </div>
                    <div className="col-sm-7">
                        <div className="header-content text-right mr-5 mt-5">
                            <h1 className="mb-1 h-text"><span className="hello">Hello, hello <br /> This is <span style={{color: 'teal'}}>Abdullah Al Mizan</span> </span> </h1>
                            <h4 className="mb-1">A front-end Web Developer,</h4>
                            <p className="p-text"> help designers, small agencies, businesses <br />bring their ideas to life.</p>
                            <div className="mt-5">
                                <a className="download" href={resume} download>Download Resume</a>
                                <Link to="/projects" className="work-btn">Projects</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;