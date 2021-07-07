import React from 'react';
import { Link } from 'react-router-dom';
import headerBg from '../../../images/header-bg2.png'
import resume from '../../../images/resume of ABDULLAH AL MIZAN.pdf';

const Header = () => {
    return (
        <div style={{ backgroundColor: 'rgb(19, 4, 18)', height: '650px', marginTop: '-76px' }}>
            <div className="row">

                <div className=" col-md-6 header-text">
                    <h1>Hello,</h1>
                    <h1>This is <span style={{ color: '#7FFF00' }}>ABDULLAH AL MIZAN</span> </h1>
                    <h3>A front-end Web Developer,</h3>
                    <p>help designers, small agencies, businesses and</p>
                    <p>bring their ideas to life.</p>

                    <div className="mt-5">
                        <a className="download" href={resume} download>Download Resume</a>
                        <Link to="/projects" className="work-btn">Projects</Link>
                    </div>
              </div>
              <div style={{color: 'white', marginTop: '300px', marginLeft:'70px'}} className="col-md-4">
                  <div>
                  <p>"Success is not final; failure is not fatal: It is the courage to continue that counts."</p>
                  <h4>-- Winston S. Churchill</h4>
                  </div>
                  
              </div>


            </div>
        </div>
    );
};

export default Header;



