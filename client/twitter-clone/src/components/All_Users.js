import React from 'react';
import '../styles/All_Users.scss';
import { useGetUsers } from '../customHooks.js/queriesHooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

function All_Users() {

    const { data, error, loading} = useGetUsers();
    if(error) console.log(error)
    if(data) console.log(data.getAllUsers);

    return (
        <div className='all-users'>
            <div className='au-card'>
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

export default All_Users