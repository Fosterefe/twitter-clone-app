import React from 'react'
import { useState } from 'react';

function CustomInput({ registerHandle, submitText, load }) {
    const [username, setUsername] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={(e) => registerHandle(e, username, gmail, password)}>
            <div className='r-inputs'>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required="required"/>
                <input
                    type='email'
                    placeholder='Gmail'
                    value={gmail}
                    onChange={(e) => setGmail(e.target.value)}
                    required="required"/>
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required="required"/>
            </div>
            <div className='r-submit'>
                { 
                    load ? 
                    <button type='submit'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </button>
                    :
                    <button type='submit'>{submitText}</button>
                }
            </div>
        </form>
    )
}

export default CustomInput