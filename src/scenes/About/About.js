import './About.css';
import profileImg from '../../assets/HawaiiProfile.jpg';

export const About = () => {
    return(
        <div className='About'>
            <div id='text-col' className='col'>
                <h4>Hi my name is...</h4>
                <h3>Grace Ohlsen</h3>
                <p>I am a software developer originally from St. Louis, Missouri. 
                    I'm a junior at the University of Colorado Boulder pursuing a B.A. in computer science and a minor in economics.
                    My favorite subjects are UI/UX design, family economics, and tech ethics. 
                
                      </p>
                <h4>My hobbies include...</h4>
                <ul>
                    <li>Fitness</li>
                    <li>Backpacking & Hiking</li>
                    <li>Cooking</li>
                    <li>Gardening</li>
                    <li>Scrolling through Pinterest</li>
                    <li>Listening to podcasts</li>
                    <li>Volunteering for <a href='https://blueprintboulder.org/'>Blueprint Boulder</a></li>
                </ul>
            </div>
            <div id='pic-col' className='col'>
                <img src={profileImg} alt='Grace Ohlsen'/>
            </div>
        </div>
    )
}