import React from 'react';
import certificatePic from '../../images/certificatePic.png';




const Certificate = () => {
    return (
        <div style={{backgroundColor: '#011313', marginTop: '-80px', height: '665px'}} className="row img-fluid ">
            <div className="col-md-12 certificate-bg">
            <h1>Certified by Programming Hero</h1>
            <img id='certificate-pic' src={certificatePic} alt="" />
            </div>
        </div>
    );
};

export default Certificate;