import React from 'react';
import aboutMe from '../../../images/header-bg2.jpg';
import profile from '../../../images/bappy.jpg';
import resume from '../../../images/resume of ABDULLAH AL MIZAN.pdf';

const AboutMe = () => {
    return (
        <div className="container mb-5">
            <div className="row mt-5 py-3">
                <div className="col-md-6">
                    <div className="about-body text-center">
                        <h2 className="font-weight-bold">About Me</h2>
                        <img className="img-fluid profile-img my-3" src={profile} alt="" />
                        <div className="about-me">
                            <h2>Hi,</h2>
                            <p>I am Abdullah. I am a front-end web developer. I don't like to define myself by the work i have done. I want to define myself by the work i want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself and do interesting things that matters.</p>
                            <a className="download" href={resume} download>Download Resume</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-right mt-5">
                        <img className="img-fluid ml-5 mt-5" src={aboutMe} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;