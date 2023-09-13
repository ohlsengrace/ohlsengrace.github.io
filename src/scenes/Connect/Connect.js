import './Connect.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import EmailIcon from '@mui/icons-material/Email';


export const Connect = () => {
    return(
        <div className='Connect'>
            <h1>Connect with me...</h1>
            <div className='connect-icons'>
                
                <a href='https://www.linkedin.com/in/grace-ohlsen-70592b21a/?profileId=ACoAADdPfDUBUEAx7qn3iQzvhRgtYHhyKQjF8wI'>
                    <LinkedInIcon sx={{width:'100px',height:'auto'}}/>
                </a>
                <a href='https://github.com/ohlsengrace'>
                    <GitHubIcon  sx={{width:'100px',height:'auto'}}/>
                </a>
                <a href='mailto: ohlsengrace@gmail.com'>
                    <EmailIcon sx={{width:'100px',height:'auto'}}/>
                </a>
                <a href='https://open.spotify.com/user/ohlseng?si=6bdf855946124a94'>
                    <LibraryMusicIcon sx={{width:'100px',height:'auto'}}/>
                </a>
                
            </div>
        </div>
    )
}