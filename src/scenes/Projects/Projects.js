import './Projects.css';
import { useMemo } from 'react';
import { CheckCircleOutline, Schedule } from '@mui/icons-material';


import projOneImg from '../../assets/ManagePortfolio.png';
import projTwoImg from '../../assets/RefCaseViz.png';
import projThreeImg from '../../assets/BCNA.png';
import projFourImg from '../../assets/ScriSports.png'

export const Projects = () => {
    const projects = useMemo(() => [
        {
            id: 0,
            title: 'Hitachi Energy Project and Capstone',
            status: 2,
            image: projTwoImg,
            imageAlt: 'RefCase Vizualisation Tool offered by Hitachi Energy',
            description: "During my internship at Hitachi Energy, I completed two significant projects. Firstly, I augmented their existing codebase for energy market forecasts by incorporating crucial hydrogen energy data. Additionally, for my capstone, I developed a client management portal for the Velocity Suite products offered by Hitachi. After interviewing customer support, I created and presented a Figma mockup of the new website design to all of the stakeholders. Then, I created an epic and user stories using the company's Scrum methodology practices. Finally, I used ReactJS, ASP.NET, and SQL for my stack technologies."
        },
        {
            id: 1,
            title: 'BCNA Wildlife : Database for Front Range Wildlife',
            status: 1,
            image: projThreeImg,
            imageAlt: 'The search page for the BCNA website created by Blueprint Boulder',
            link: 'https://blueprintboulder.org/',
            description: "As a member of Blueprint Boulder, I worked on a project for the Boulder County Nature Association. We created a web portal that made it easier to add, manage, and search through Front Range Wildlife. My main contribution was the functionality and design of the search page. It consisted of keyword search, filtration by nested categories, sorting, as well as filtering by shared characteristics between categories. All of the work was done for charity and we are still in the process of development and testing."
        },
        {
            id: 2,
            title: 'Scri Sports Mobile App ',
            link: 'https://www.scrisports.com/about-us',
            status: 2,
            image: projFourImg,
            imageAlt: `The website for Scri Sports`,
            description: "During my tenure with Scri Sports, a dynamic sports startup, I played a pivotal role in the development phase, assisting in the creation of wireframes and developing the initial iteration of their flagship mobile application. Leveraging Flutter, Dart, and Google Firebase, I crafted an intuitive user experience for both iOS and Android platforms."
        },
        {
            id: 3,
            title: 'Mock Stocks : Stock Market Simulation Game',
            link: 'https://github.com/rt0328/TheMoneyProject',
            status: 2,
            image: projOneImg,
            imageAlt: `The Mock Stocks player manage portfolio page`,
            description: "This group project was made for CSCI 3308 Software Development Methods and Tools. Mock Stocks is a free stock game simulation designed to help young adults build an understanding of the stock market and how to trade. Players can form groups with their friends and compete to see who has the best stock trading abilities. A video demonstration and docker container is included in the repo, so check it out!"
        },
    ], []); // Empty dependency array to memoize the projects array

    return (
        <div className='projects'>
            <h1>Projects</h1>
            {projects.map((project) => (
                <div className='project' key={project.id}>
                    <img className='proj-image' src={project.image} alt={project.imageAlt}></img>
                    <div className='proj-info'>
                        <a href={project.link}><h4 className='proj-title'>{project.title}</h4></a>
                        <div className="proj-status">
                            {project.status === 1 ? (
                                <>
                                    <Schedule/>
                                    <p className='proj-status'>In Progress</p>
                                </>
                            ) : project.status === 2 ? (
                                <>
                                    <CheckCircleOutline/>
                                    <p className='proj-status'>Completed</p>
                                </>
                            ) : null}
                        </div>
                        <p className='proj-description'>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
