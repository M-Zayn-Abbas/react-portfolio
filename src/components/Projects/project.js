import { useEffect, useState } from 'react';
import './projext.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import pic from '../../assets/images/first.png'
import pic1 from '../../assets/images/pic1.png'
import gym from '../../assets/images/gym.png'
import clothing from '../../assets/images/clothing.png'

const Project = ()=>{

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['P','r','o','j','e','c','t','s'];

    

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Cleanup function to clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);
    return(
        <div className='container project-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15}/>
                <br/>
                </h1>
                
            </div>
            <section className='project-cards'>
                <a href='www.google.com' target="_blank">
                <div class="grid-item">
                    <img src={pic} alt="cafe" class="image"/>
                        <div class="content">
                            <h3>A Cafe Website</h3>
                                 <p>Building digital cafés with WordPress magic</p>
                         </div>
                     
                </div>
                </a>
                
                <a href='www.google.com' target="_blank">
                <div class="grid-item">
                    <img src={pic1} alt="epicurean heven" class="image"/>
                        <div class="content">
                            <h3>a Fast Food Restaurant</h3>
                                 <p>A Fast Food Restaurant Website</p>
                         </div>
                     
                </div>
                </a>

                <a href='www.google.com' target="_blank">
                <div class="grid-item">
                    <img src={gym} alt="gym" class="image"/>
                        <div class="content">
                            <h3>A Gym Website</h3>
                                 <p>Empowering fitness journeys </p>
                         </div>
                     
                </div>
                </a>

                <a href='www.google.com' target="_blank">
                <div class="grid-item">
                    <img src={clothing} alt="fashion" class="image"/>
                        <div class="content">
                            <h3>Fashion Designer Wesbite</h3>
                                 <p>Elevating style and elegance online</p>
                         </div>
                     
                </div>
                </a>
            </section>
                
        </div>

    )
}

export default Project;