import './Hero.css';
import heroImg from '../../assets/hero.jpeg'

export const Hero = () => {
    return(
        <div className='Hero'>
            <img className='hero-img' src={heroImg} alt='Maroon Bells in Aspen, Colorado'/>
        </div>
    )
}