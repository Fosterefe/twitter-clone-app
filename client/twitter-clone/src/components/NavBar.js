import React from 'react'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faUser, faArrowRightFromBracket, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import '../styles/NavBar.scss';

function NavBar() {

    const userId = JSON.parse(localStorage.getItem('current_user')).user.id;

    return (
        <div className='Navbar'>
            <nav>
                <ul className='n-links'>
                    <li>
                        <Link to='/home'>
                            <FontAwesomeIcon icon={faHouse}/>
                        </Link>
                    </li>
                    <li className='search'>
                        <Link to={`/all-users`}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/user/${userId}`}>
                            <FontAwesomeIcon icon={faUser}/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/logout'>
                            <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar