import React from 'react'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faUser, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import '../styles/NavBar.scss';

function NavBar() {


    return (
        <div className='Navbar'>
            <nav>
                <ul className='n-links'>
                    <li>
                        <Link to='/home'>
                            <FontAwesomeIcon icon={faHouse}/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/home'>
                            <FontAwesomeIcon icon={faUser}/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/home'>
                            <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar