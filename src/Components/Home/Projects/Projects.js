import React from 'react';
import volunteer from '../../../images/projects/done/volunteer.jpg'
import creative from '../../../images/projects/done/creative agency.jpg'
import travel from '../../../images/projects/done/travel-guru.jpg'
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import { Link } from 'react-router-dom';

const projectData = [
    {
        id: 1,
        title: "Volunteer Network",
        description: "A full-stack volunteer Service web application",
        img: volunteer,
        tools: [
            {
                item: "React"
            },
            {
                item: "Node.js"
            },
            {
                item: "MongoDB"
            },
            {
                item: "Bootstrap"
            },
            {
                item: "HTML"
            },
            {
                item: "Css"
            }
        ],
        features: [
            {
               feature: "Users can take part at any voluntary work and handle their volunteer services." 
            },
            {
                feature: "Users have to login and register to take part in social work."
            },
            {
                feature: "Admin can keep records of all user's volunteer services and can remove any service as well."
            },
            {
                feature: "New Services could be added by Admins."
            },
            {
                feature: "Firebase authentication."
            }
        ],
        live: "https://volunteers-work.web.app/",
        git: "https://github.com/Abdullah0095/assignment-09-2020-pro"
    },
    {
        id: 2,
        title: "Creative Agency",
        description: "A complete responsive service selling website",
        img: creative,
        tools: [
            {
                item: "React"
            },
            {
                item: "Node.js"
            },
            {
                item: "MongoDB"
            },
            {
                item: "Bootstrap"
            },
            {
                item: "HTML"
            },
            {
                item: "Css"
            }
        ],
        features: [
            {
                feature: "Different dashboard for Clients and Admins."
            },
            {
                feature: "Feedback section for Clients."
            },
            {
                feature: "Admin can give access of Admin dashboard."
            },
            {
                feature: "Services could be handled by Admins."
            },
            {
                feature: "Firebase authentication."
            }
        ],
        live: "https://creative-agency-f.web.app/",
        git: "https://github.com/Abdullah0095/assignment-10-2020-pro"
    },
    {
        id: 3,
        title: "Travel Guru",
        description: "A travel booking web application",
        img: travel,
        tools: [
            {
                item: "React"
            },
            {
                item: "MaterialUI"
            },
            {
                item: "Bootstrap"
            },
            {
                item: "HTML"
            },
            {
                item: "Css"
            }
        ],
        features: [
            {
                feature: "Clickable travel place card to book hotels."
            },
            {
                feature: "Booking Form."
            },
            {
                feature: "Login with Email and Password."
            },
            {
                feature: "Firebase authentication."
            }
        ],
        live: "https://travel-gurus.web.app",
        git: "https://github.com/Abdullah0095/assignment-08-2020-pro"
    },
];


const Projects = () => {
    return (
        <div className="container-fluid px-5 pt-1 pb-5">
            <h2 className="text-brand mb-5"><u>Some of My Projects</u></h2>
            <div className="row">
               {
                   projectData.map(pr => <ProjectDetails key={pr.id} projects={pr} />)
               }
            </div>
            <div className="text-center py-4 explore mt-5">
            <Link to="/projects" className="explore-btn">Explore More</Link>
            </div>
        </div>
    );
};

export default Projects;