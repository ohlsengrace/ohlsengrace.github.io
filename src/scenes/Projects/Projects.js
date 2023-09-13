import './Projects.css';
import { useState,useEffect } from 'react';
import { IconButton } from '@mui/material';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import projOneImg from '../../assets/personal-website.png';
import projTwoImg from '../../assets/jakes.png';
import projThreeImg from '../../assets/hitachi.png';
import projFourImg from '../../assets/blueprint.png';
import projFiveImg from '../../assets/fleetwood.png';


export const Projects = () => {

    const projects = 
        [
            {
                id: 0,
                title: 'Personal Website',
                subtitle: 'Single web page to display profile and projects',
                image: projOneImg,
                imageAlt: 'graceohlsen.com'
            },
            {
                id: 1,
                title: "Jake's on Main Website",
                subtitle: "Website for small business in St. Charles, MO",
                image: projTwoImg,
                imageAlt: 'lig-jakes-on-main.com'
            },
            {
                id: 2,
                title: 'HE Reg Site',
                subtitle: 'During internship at Hitachi Energy, redesigned the client management web portal',
                image: projThreeImg,
                imageAlt: 'HE VS Reg Site'
            },
            {
                id: 3,
                title: 'Blueprint Project',
                subtitle: 'Single web page to display profile and projects',
                image: projFourImg,
                imageAlt: 'graceohlsen.com'
            },
            {
                id: 4,
                title: "Another Site",
                subtitle: "Website for small business in St. Charles, MO",
                image: projFiveImg,
                imageAlt: 'lig-jakes-on-main.com'
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
                                    <h3>{slide.title}</h3>
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