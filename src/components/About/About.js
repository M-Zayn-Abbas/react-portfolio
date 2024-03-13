import './About.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        // Cleanup function to clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
             <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t', ' ' , 'm','e']}
                    idx={15}
                    />
                </h1>
                <p>As a frontend developer, I specialize in crafting engaging user experiences using HTML, CSS, and JavaScript. I'm dedicated to delivering sleek designs and efficient code that enhance my clients' digital presence.</p>
                <p>In WordPress development, I create dynamic websites with custom themes and plugins, tailored to meet each project's unique needs. I stay ahead of industry trends to ensure my solutions are cutting-edge and future-proof.</p>
                <p>Combining frontend proficiency with WordPress expertise, I offer comprehensive web development services that prioritize aesthetics and functionality. Whether it's a portfolio site or an e-commerce platform, I strive to exceed expectations with every project.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>   
                </div>
            </div>

        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About;