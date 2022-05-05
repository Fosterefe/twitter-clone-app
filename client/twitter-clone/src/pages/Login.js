import React from 'react'
import { useState } from 'react'
import '../styles/Login.scss'
import CustomInput from '../components/input';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useLoginUser } from '../customHooks.js/mutationHooks';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [ loginUser, { data, loading, error } ] = useLoginUser();

    if(data?.loginUser) {
      console.log(data)
      localStorage.setItem('current_user', JSON.stringify(data.loginUser))
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      loginUser({ variables: { username, gmail, password } });

      setUsername('');
      setGmail('');
      setPassword('');

/*       if(data?.loginUser) {
        navigate('/dashboard');
      }; */
    }

    return (
        <div className='Login'>
          {
            error && 
              <div className="alert alert-primary d-flex align-items-center" role="alert">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                      viewBox="0 0 16 16"
                      role="img"
                      aria-label="Warning:">
                      <path
                          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                  <div>
                      Wrong Credentials! Try again 
                  </div>
              </div>
          }
            <div className='l-card'>
                <div className='l-header'>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <h1>Sign in to Twitter</h1>
                </div>
                <CustomInput
                    registerHandle={handleSubmit}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setGmail={setGmail}
                    username={username}
                    gmail={gmail}
                    password={password}
                    submitText={'Sign In'}
                    load={loading}
                    />
            </div>
        </div>
    )
}

export default Login