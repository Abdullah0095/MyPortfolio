import React from 'react';
import emailjs from 'emailjs-com';
import linkedIn from '../../../images/social-icons/linkedin.png';
import github from '../../../images/social-icons/github.png';


function sendEmail(e) {
    e.preventDefault();
    alert("You want to contact with me, Please press OK");

    emailjs.sendForm('service_9jj44f4', 'template_tw70rri', e.target, 'user_MZQZJ2L8o1DDTmBVE2NrF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
       });
       
       e.target.reset();
}


 

const Contact = () => {


    return (
        <div className="container-fluid p-5 mt-5 contact">
            <div className="row d-flex align-items-center py-3">

                <div className="col-md-6">
                    <form style={{ marginLeft: '100px' }} className="contact-form" onSubmit={sendEmail}>
                        <label>Name</label> <br />
                        <input style={{ height: '35px', borderRadius: '10px', width: '350px', textAlign: 'center' }} type="text" name="user_name" /> <br />
                        <label>Email</label> <br />
                        <input style={{ height: '35px', borderRadius: '10px', width: '350px', textAlign: 'center' }} type="email" name="user_email" /> <br />
                        <label>Message</label> <br />
                        <textarea style={{ height: '80px', borderRadius: '10px', width: '400px', textAlign: 'center' }} name="message" /> <br />
                        <input style={{ height: '50px', borderRadius: '10px', width: '100px', marginTop: '20px', border: '1px solid gray', backgroundColor: 'green', textAlign: 'center' }} type="submit" value="Send" />
                    </form>
                    
                </div>

                <div className="col-md-6">
                    <div className="text-right text-white mr-5">

                        <p className="mt-3"><strong>Email:</strong><em> <span className="ml-2">abdullahalmizan.bd@gmail.com</span></em></p>

                        <div className="social-icon ">
                            <ul style={{ marginRight: '90px' }} className="list-inline-mb-0">

                                <a target="_blank" href="https://www.linkedin.com/in/abdullah-95/"><li className="list-inline-item"><img src={linkedIn} alt="" /></li></a>
                                <a target="_blank" href="https://github.com/Abdullah0095"><li className="list-inline-item"><img src={github} alt="" /></li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Contact;