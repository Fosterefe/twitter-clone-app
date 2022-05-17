import React from 'react'
import { useState } from 'react'
import Post from '../components/Post';
import NavBar from '../components/NavBar';
import '../styles/Dashboard.scss'
import AddPostInput from '../components/AddPostInput';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMarker} from '@fortawesome/free-solid-svg-icons'
import { useCreateNewPost } from '../customHooks.js/mutationHooks';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import All_Users from '../components/All_Users';

function Dashboard() {
    const [content, setContent] = useState('');
    const owner_id = JSON.parse(localStorage.getItem('current_user')).user.id;
    const postInput = React.createRef(null);
    const postsDiv = React.createRef(null);

    const [ createPost, { data, error, loading } ] = useCreateNewPost();
    if(error) console.log(error.message);

    const openPostInput = () => {
      postInput.current.classList.toggle('active');
      postsDiv.current.classList.toggle('quit');
    }

    const handleTweet = (e) => {
      e.preventDefault();

      createPost({ variables: { content, owner_id } });

      setContent('');
    }

    return (
        <div className='d-container'>
            <NavBar/>
            <div className='Dashboard'>
                <div onClick={openPostInput} className='mobile-add'>
                    <FontAwesomeIcon icon={faMarker}/>
                </div>
                <AddPostInput ref={postInput} submitForm={handleTweet} value={content} changeValue={setContent}/>
                <div ref={postsDiv} className='home-posts'>
                  <Post/>
                </div>
            </div>
            <All_Users />
        </div>
    )
}

export default Dashboard;