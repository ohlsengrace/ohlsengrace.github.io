import './Projects.css';
import { useState,useEffect } from 'react';
import { IconButton } from '@mui/material';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import projOneImg from '../../assets/personal-website.png';
import projTwoImg from '../../assets/hitachi.png';
import projThreeImg from '../../assets/blueprint.png';
import projFourImg from '../../assets/MotiYoda.jpeg';
import projFiveImg from '../../assets/nodejs.png';


export const Projects = () => {

    const projects = 
        [
            {
                id: 0,
                title: 'Personal Website',
                status: 'In Progress',
                subtitle: 'Website to display my profile, projects, and resume using ReactJS and GitHub pages.',
                image: projOneImg,
                imageAlt: 'ohlsengrace.github.io',
            },
            {
                id: 1,
                title: 'HE Internal Tool',
                status: 'In Progress',
                subtitle: 'Redesign of front-end for an internal tool at Hitachi Energy using React and SyncFusion.',
                image: projTwoImg,
                imageAlt: 'HE VS Reg Site'
            },
            {
                id: 2,
                title: 'Blueprint Boulder',
                status: 'TBD',
                subtitle: "I volunteer for Blueprint Boulder, a non-profit that creates technologies for other non-profits. This year's project is TBD.",
                image: projThreeImg,
                imageAlt: 'Blueprint Boulder'
            },
            {
                id: 3,
                title: "MotiYoda",
                subtitle: "Python program that alters motivational quotes to resemble Yoda's speech, object-subject-verb structure. Created for CU's 24-hour Hackathon.",
                image: projFourImg,
                imageAlt: 'https://www.linkedin.com/posts/lucaangeletti_do-or-do-not-there-is-no-try-yoda-activity-6437971031696113664-4Bq1/',
                link: 'https://github.com/maxwmeiser/hackathon-march2022'
            },
            {
              id: 4,
              title: "Pinventory",
              subtitle: "Led team to create a NodeJS backend for a textbook inventory web portal. Made for high school to use to track textbooks.",
              image: projFiveImg,
              imageAlt: 'https://www.forestadmin.com/blog/best-node-js-apps-examples-to-inspire-your-next-project/',
              link: 'https://github.com/ohlsengrace/public-git/tree/main/pinventory_backend-main'
          }
        ]


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [numDisplayed, setNumDisplayed] = useState(3);
  
    // Update windowWidth when the window is resized
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

    // Calculate the numDisplayed based on windowWidth
    useEffect(() => {
      // Define a function to calculate the variable
      function calculateNumDisplayed(width) {
        // Adjust this logic as needed for your specific requirements
        if (width >= 1000) {
          return 3;
        } else if (width >= 600) {
          return 2;
        } else {
          return 1;
        }
      }
  
      // Update the variable based on windowWidth
      const newNumDisplayed = calculateNumDisplayed(windowWidth);
      setNumDisplayed(newNumDisplayed);
      setActiveSlides(projects.slice(0, newNumDisplayed));
    }, [windowWidth]);

    // Update activeSlides when the numDisplayed changes while keeping the same first slide
    useEffect(() => {
        console.log('setting active slides');
        setActiveSlides((prevActiveSlides) => {
            return projects.slice(
            prevActiveSlides[0].id,
            prevActiveSlides[0].id + numDisplayed
            );
        });
    }, [numDisplayed]);


    
    const numSlides = projects.length;
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
  
    const [activeSlides, setActiveSlides] = useState(projects.slice(0, numDisplayed));
  
    // Move one slide forward in the carousel
    function nextProject() {
        console.log('nextProject');
        const nextIndex = activeSlides[0].id + numDisplayed;
        if (nextIndex < numSlides) {
            setActiveSlides(projects.slice(nextIndex, nextIndex + numDisplayed));
            setAtStart(false);
        if (nextIndex + numDisplayed >= numSlides) {
          setAtEnd(true);
        }
      }
    }
  
    // Move one slide backward in the carousel
    function backProject() {
        console.log('backProject');
        const nextIndex = activeSlides[0].id - numDisplayed;
        if (nextIndex >= 0) {
            setActiveSlides(projects.slice(nextIndex, nextIndex + numDisplayed));
            setAtEnd(false);
        if (nextIndex === 0) {
          setAtStart(true);
        }
      }
    }
    

    return(
        <div className='Projects'>
            <h1>Projects</h1>
            <div className='projects'>
                <IconButton className='btn' onClick={backProject} disabled={atStart}>
                    <KeyboardArrowLeftIcon/>
                </IconButton>
                {

                    activeSlides.map((slide) => {
                            return(
                                <div className='project'>
                                    <img src={slide.image} alt={slide.imageAlt}/>
                                    
                                    {slide.link ? 
                                      <h3>
                                        <a href={slide.link} target='_blank' rel='noreferrer'>{slide.title}</a>
                                      </h3> 
                                      : 
                                      <h3>{slide.title}</h3>
                                    }
                                    <h4>{slide.subtitle}</h4>
                                </div>
                            )
                    })
                
                }
                <IconButton className='btn' onClick={nextProject} disabled={atEnd}>
                    <KeyboardArrowRightIcon/>
                </IconButton>
            
            </div>
        </div>
    )
}