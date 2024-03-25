import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Zlogo from '../../assets/images/ZLogo.png'
import fiver from'../../assets/images/fiverr.png'


const Sidebar =() => {
    return( <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={Zlogo} alt='logo'/>
        </Link>
        <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="https://www.fiverr.com/mzaynabbas_" target='_blank'>
            <img src={fiver}  style={{
          width: '23px', 
          height: 'auto', 
          
        }}/>
        </NavLink>
        
        </nav>
        <ul>
            <li>
                <a className="linkedin" target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/muhammad-zain-abbas-004953275/'>
                    <FontAwesomeIcon icon={faLinkedin}  color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a className="github" target='_blank' rel='noreferrer' href='https://github.com/M-Zayn-Abbas'>
                    <FontAwesomeIcon icon={faGithub}  color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a className="youtube" target='_blank' rel='noreferrer' href='https://youtube.com/@MZaynAbbas?si=I8Rt78Dd7MkPvaIy'>
                    <FontAwesomeIcon icon={faYoutube}  color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a className="instagram" target='_blank' rel='noreferrer' href='https://www.instagram.com/mzaynabbas_/'>
                    <FontAwesomeIcon icon={faInstagram}  color='#4d4d4e' />
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Sidebar;