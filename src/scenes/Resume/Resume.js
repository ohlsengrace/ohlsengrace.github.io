import { Button } from '@mui/material';
import graceResume from '../../assets/Grace Ohlsen Resume - 10::13:23.pdf';
import './Resume.css'

export const Resume = () => {

    // Function to open pdf file of resume in another tab (resume located in assets folder)
    const openResume = () => {
        window.open(graceResume);
    }

    return(
        <div className='Resume'>
            <h1>Click to open resume</h1>
            <Button variant='contained' onClick={openResume} rel='noopener noreferrer'>Click Me!</Button>
        </div>
    )
}