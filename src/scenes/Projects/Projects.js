import './Projects.css';
import { useState, useEffect,useMemo } from 'react';
import { IconButton } from '@mui/material';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import projOneImg from '../../assets/personal-website.png';
import projTwoImg from '../../assets/hitachi.png';
import projThreeImg from '../../assets/blueprint.png';
import projFourImg from '../../assets/MotiYoda.jpeg';
import projFiveImg from '../../assets/nodejs.png';


export const Projects = () => {

  const projects = useMemo(() => [
    
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
        subtitle: 'Redesign of front-end for an internal tool at Hitachi Energy using ReactJS.',
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
    
  ], []); // Empty dependency array to memoize the projects array




  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [numDisplayed, setNumDisplayed] = useState(3);

  const numSlides = projects.length;
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const [activeSlides, setActiveSlides] = useState(projects.slice(0, numDisplayed));




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
      if (width >= 1200) {
        return 3;
      } else if (width >= 800) {
        return 2;
      } else {
        return 1;
      }
    }

    // Update the variable based on windowWidth
    const newNumDisplayed = calculateNumDisplayed(windowWidth);
    setNumDisplayed(newNumDisplayed);


  }, [windowWidth]);


  // activeSlides is the array of slides that are currently displayed
  useEffect(() => {
    // Functional update to ensure that the activeSlides state is updated based on the previous state
    setActiveSlides((prevActiveSlides) => {
      // If the previous activeSlides is empty, return the first numDisplayed slides
      if (prevActiveSlides.length === 0) {
        return projects.slice(0, numDisplayed);
      }

      // If the previous activeSlides is not empty, return the next numDisplayed slides
      return projects.slice(
        prevActiveSlides[0].id,
        prevActiveSlides[0].id + numDisplayed
      );
    });
  }, [numDisplayed,projects]);

  // Change atEnd and atStart when activeSlides changes
  useEffect(() => {
    if (activeSlides[0].id === 0) {
      setAtStart(true);
    } else {
      setAtStart(false);
    }

    if (activeSlides[0].id + numDisplayed >= numSlides) {
      setAtEnd(true);
    } else {
      setAtEnd(false);
    }
  }, [activeSlides, numDisplayed, numSlides]);



  // Move one slide forward in the carousel
  function nextProject() {
    const nextIndex = activeSlides[0].id + 1;
    if (nextIndex + numDisplayed <= numSlides) {
      setActiveSlides(projects.slice(nextIndex, nextIndex + numDisplayed));
    }
  }

  // Move one slide backward in the carousel
  function backProject() {

    const nextIndex = activeSlides[0].id - 1;
    if (nextIndex >= 0) {
      setActiveSlides(projects.slice(nextIndex, nextIndex + numDisplayed));
    }
  }


  return (
    <div className='Projects'>
      <h1>Projects</h1>
      <div className='projects'>
        <IconButton className='btn' onClick={backProject} disabled={atStart}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        {

          activeSlides.map((slide) => {
            return (
              <div className='project'>
                <img src={slide.image} alt={slide.imageAlt} />

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
          <KeyboardArrowRightIcon />
        </IconButton>

      </div>
    </div>
  )
}