import './About.css';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faCss3, faGitAlt, faHtml5, faWix, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import img1 from '../../assets/images/mongodb.png'
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
             <div className='about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t', ' ' , 'm','e']}
                    idx={15}
                    />
                </h1>
                <p>As a <strong>MERN stack developer</strong>, I specialize in building dynamic web applications using MongoDB, Express, React, and Node.js. I focus on creating seamless and engaging user experiences while ensuring efficient and scalable solutions. I also have experience working with <strong>Wix</strong> and <strong>WordPress</strong>, creating custom websites with tailored themes and plugins to meet my clients' specific needs.</p>

<p>Whether it's a portfolio site, business website, or any other type of web presence, I offer comprehensive development services that prioritize both <strong>aesthetics and functionality</strong>.</p>

<p>With a commitment to staying ahead of industry trends, I strive to deliver cutting-edge solutions that exceed expectations for every project.</p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faNode} color='#43853D'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faWordpress} color='#21759B'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faWix} color='#000'/>
                    </div>
                    <div className='face6'>
                        <img src={img1}></img>
                    </div>   
                </div>
            </div>

        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About;