import { Link } from 'react-router-dom';
import './Home.css'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';
import Zlogo from '../../assets/images/ZLogo.png'
import Project from '../Projects/project';

const Home = ()=> {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a','i','n',' ','A','b','b','a','s'];
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Cleanup function to clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);
    
    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i, &nbsp; </span>
                
                <span className={`${letterClass} _13`}> I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <img src={Zlogo} alt='develepor'/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15}/>
                <br/>
                    <span className='webdev'>
                <AnimatedLetters  letterClass={letterClass} 
                strArray={jobArray}
                idx={22}/>
                </span>

                </h1>
                <h2>Mern Stack / Wordpress / Wix Developer</h2>
            </div>
            <div className='project'>
                <Project className='project'/>
            </div>
           
        </div>
        <Loader type="pacman"/>
        </>);
}



export default Home;
