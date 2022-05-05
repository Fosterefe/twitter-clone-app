import React from 'react'
import '../styles/Register.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react'; 
import { useCreateUser } from '../customHooks.js/mutationHooks';
import { useNavigate } from 'react-router-dom';
import CustomInput  from '../components/input';

function Register() {
    const [username, setUsername] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [ createPerson ] = useCreateUser();

    const navigate  = useNavigate();    

    const handleSubmit = (e) => {
        e.preventDefault();

        createPerson({ variables: { username, gmail, password } });

        setUsername('');
        setGmail('');
        setPassword('');

        navigate('/login');
    }

    return (
    <div className='Register'>
        <div className='r-card'>
            <div className='r-header'>
                <FontAwesomeIcon icon={ faTwitter } />
                <h1>Create your account</h1>
            </div>  
            <CustomInput registerHandle={handleSubmit} 
            setUsername={setUsername}
            setPassword={setPassword}
            setGmail={setGmail}
            username={username}
            gmail={gmail}
            password={password}
            submitText={'Create User'}/>
        </div>
    </div>
    )
}

export default Register
