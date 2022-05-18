import React from 'react';
import NavBar from '../components/NavBar';
import {useGetUsers} from '../customHooks.js/queriesHooks';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/See_All_Users.scss';

function See_All_Users() {
    const {data, error, loading} = useGetUsers();
    if (error) 
        console.log(error)

    return (
        <div className='see-AllUsers'>
            <NavBar/>
            <div className='rest'>
                <h3>Who to follow</h3>
            <div className='u-container'>
                    { 
                        data && data.getAllUsers.map(user => (
                            <Link to={`/user/${user.id}`} className='user' key={user.id}>
                                <FontAwesomeIcon icon={faUser} />
                                <p>{user.username}</p>
                            </Link>
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}

export default See_All_Users