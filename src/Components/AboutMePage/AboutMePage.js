import React from 'react';
import aboutMe from '../../images/about.png';
import profile from '../../images/bappy.jpg';
import resume from '../../images/resume of ABDULLAH AL MIZAN.pdf';
import facebook from '../../images/social-icons/fb.png';
import linkedIn from '../../images/social-icons/linkedin.png';
import github from '../../images/social-icons/github.png';

const AboutMePage = () => {
    return (
        <div className="container mb-5">
            <h2 className="text-brand mb-5 about-text mt-4"><u>About Me</u></h2>
        <div className="row mt-5 py-3">
            <div className="col-md-6 about-me py-5">
                <div className="about-body text-center">
                   
                    <img className="img-fluid profile-img my-3" src={profile} alt="" />
                    <div className="about-me">
                        <h2>Hi,</h2>
                        <p>I am Abdullah. I am a front-end web developer. I don't like to define myself by the work i have done. I want to define myself by the work i want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself and do interesting things that matters. </p><br/>
                        <a className="download" href={resume} download> Resume</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 address">
                <div className="text-right mt-5">
                    {/* <img className="img-fluid mt-5" src={aboutMe} alt="" /> */}
                    <div className="text-center text-white address-text">
                        
                        <p className="mt-n3"><strong>Email:</strong><em> abdullahalmizan.bd@gmail.com</em></p>
                        <p className="mt-n3"><strong>GitHub:</strong><em> https://github.com/Abdullah0095</em></p>
                        <p className="mt-n3">South tootpara</p>
                        <p className="mt-n3">Khulna</p>
                        <div className="social-icon mr-5">
                            <ul className="list-inline-mb-0">
                                
                                <a target="_blank" href="https://www.linkedin.com/in/abdullah-95/"><li className="list-inline-item"><img src={linkedIn} alt="" /></li></a>
                                <a target="_blank" href="https://github.com/Abdullah0095"><li className="list-inline-item"><img src={github} alt="" /></li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AboutMePage;