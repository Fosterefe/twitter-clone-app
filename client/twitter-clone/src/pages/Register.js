import React from 'react'
import '../styles/Register.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useCreateUser } from '../customHooks.js/mutationHooks';
import { useNavigate } from 'react-router-dom';
import CustomInput  from '../components/input';

function Register() {
    const [ createPerson ] = useCreateUser();

    const navigate  = useNavigate();    

    const handleSubmit = (e, username, gmail, password) => {
        e.preventDefault();

        if(username.trim() === '' || gmail.trim() === '' || password.trim() === '') return <p>Fill all the credentials</p>
        if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(gmail) === false) return

        createPerson({ variables: { username, gmail, password } });

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
           /*  setUsername={setUsername}
            setPassword={setPassword}
            setGmail={setGmail}
            username={username}
            gmail={gmail}
            password={password} */
            submitText={'Create User'}/>
        </div>
    </div>
    )
}

export default Register
