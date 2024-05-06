import './About.css';
import profileImg from '../../assets/HawaiiProfile.jpg';

export const About = () => {
    return(
        <div className='About'>
            <div id='text-col' className='col'>
                <h4>Hi my name is...</h4>
                <h3>Grace Ohlsen</h3>
                <p>
                    I am a full-stack software developer based in the beautiful Boulder, Colorado. 
                    I'm currently a junior at the University of Colorado Boulder pursuing a B.A. in computer science and a minor in economics.
                    With a focus on delivering impactful online experiences, I specialize in crafting websites tailored to the unique needs of businesses and individuals. 
                    From conceptualization to deployment, I ensure every aspect of your digital presence reflects your brand identity and resonates with your audience, driving growth and engagement.
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