import aspenImg from './assets/aspen.png'

import { About } from './scenes/About/About';
import { Connect } from './scenes/Connect/Connect';
import { Projects } from './scenes/Projects/Projects';
import { Hero } from './scenes/Hero/Hero';
import { useRef } from 'react';
import { Button } from '@mui/material';
import { Resume } from './scenes/Resume/Resume';

import './App.css'

export const App = () => {

    const about = useRef(null);
    const projects = useRef(null);
    const connect = useRef(null);
    const resume = useRef(null);
    
    const scrollToSection = (elementRef) => {

        if (elementRef.current){
            // Get the target element's position relative to the viewport
            const top = elementRef.current.offsetTop;

            window.scrollTo({
                behavior: 'smooth',
                top: top
            });
        }
    }


    return(
    <div className='App'>



        <div className='NavBar'>
            <div className='nav-links'>
                <Button type="button" onClick={() => scrollToSection(about)} className='nav-link'>About</Button>
                <Button onClick={() => scrollToSection(projects)} className='nav-link'>Projects</Button>
                <Button onClick={() => scrollToSection(resume)} className='nav-link'>Resume</Button>
                <Button onClick={() => scrollToSection(connect)} className='nav-link'>Connect</Button>
            </div>


            {/* Used for help: https://www.youtube.com/watch?v=oszUqCqTGHo */}
        </div>

        <div className='page-container'>
            <Hero className='hero' />

            <div ref={about} className='section'>
                <About/>
            </div>

            <div ref={projects} className='section'>
                <Projects/>
            </div>

            <div ref={resume} className='section'>
                <Resume/>
            </div>

            <div ref={connect} className='section'>
                <Connect/>
            </div>
            
        </div>

        <img src={aspenImg} alt='geometric mountain shape'/>

        </div>
    )
}