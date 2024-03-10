import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './Home.scss'
const Home = ()=> {
    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi , <br/> I,m
                <img src={LogoTitle} alt='develepor'/>
                lobodan
                </h1>
                <h2>Frotend develepor/ Javascript Expert</h2>
                <Link to="contact" className="flat-button">Contact Me</Link>
            </div>
        </div>);
}



export default Home;
