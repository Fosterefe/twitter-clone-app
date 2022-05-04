import React from 'react'
import '../styles/Register.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

const ALL_USERS = gql`
query {
  getAllUsers {
    id
    username
  }
}
`

const CREATE_USER = gql `
mutation createUser($username: String, $gmail: String, $password: String){
  createUser(user: {
    username: $username,
    gmail: $gmail,
    password: $password
  }) {
    id
    username
    password
    gmail
  }
}
`

function Register() {
    const [username, setUsername] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');

    const { data, error, loading } = useQuery(ALL_USERS)
    const [ createPerson ] = useMutation(CREATE_USER, { refetchQueries: [{query: ALL_USERS }]}); 

    const handleSubmit = (e) => {
        e.preventDefault();

        createPerson({ variables: { username, gmail, password } });

        setUsername('');
        setGmail('');
        setPassword('');
    }

    return (
    <div className='Register'>
        <div className='r-card'>
            <div className='r-header'>
                <FontAwesomeIcon icon={ faTwitter } />
                <h1>Create your account</h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='r-inputs'>
                    <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type='email' placeholder='Gmail' value={gmail} onChange={(e) => setGmail(e.target.value)} required/>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className='r-submit'>
                    <button type='submit'>Create account</button>
                </div>
            </form>
        </div>

        { loading ? 
            <p>loading...</p>
            :
            data && data.getAllUsers.map(p => (
                <p style={ { color: 'white' } }>{p.username}</p>
            ))   
        }

    </div>
    )
}

export default Register
