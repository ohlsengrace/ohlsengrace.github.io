import './Hero.css';
import heroImg from '../../assets/hero.jpeg'
import namePng from '../../assets/graceCursive.png'

export const Hero = () => {
    return(
        <div className='Hero'>
            <img className='hero-img' src={heroImg} alt='Maroon Bells in Aspen, Colorado'/>
            <img className='name-png' src={namePng} alt='Grace Ohlsen'/>
        </div>
    )
}