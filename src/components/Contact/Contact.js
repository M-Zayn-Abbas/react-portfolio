import Loader from 'react-loaders';
import './Contact.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact =()=> {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        // Cleanup function to clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e' ]}
                    idx={15}
                    />
                </h1>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact;