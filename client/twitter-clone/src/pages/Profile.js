import React from 'react'
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useGetUserById} from '../customHooks.js/mutationHooks';
import NavBar from '../components/NavBar'
import '../styles/Profile.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import LikeBtn from '../components/LikeBtn';
import FollowBtb from '../components/FollowBtb';
import { useState } from 'react';

function Profile() {
    const local_user = JSON.parse(localStorage.getItem('current_user'));
    const {user} = useParams();

    const [getUserById, {
            data,
            error,
        }
    ] = useGetUserById();
    if (error) 
        console.log(error);

    useEffect(() => {
        getUserById({
            variables: {
                getUserByIdId: user
            }
        })
    }, [user])

    const checkForFollow = (user) => {
        if(!user) return

        if(local_user.user.follows.some((item) => item.id === user.id)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className='P-Profile'>
            <NavBar/>
            <div className='P-main'>
                <div className='header'>
                    <h3>{data && data.getUserById.username}</h3>
                    <FontAwesomeIcon icon={faUser}/>
                    {data && data.getUserById.id === local_user.user.id ?
                        null
                        :
                        <FollowBtb myId={local_user.user.id} userId={data && data.getUserById.id} clicked={checkForFollow(data && data.getUserById)} />
                    }
                    
                    <div className='ff'>
                        <p>Followers: {data && data.getUserById.followers.length}</p>
                        <p>Following: {data && data.getUserById.follows.length}</p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='tww'><h3>Tweets</h3></div>
                <div className='Post-list'>
                    {data && data.getUserById.posts.length === 0 ? (<p>There are no posts</p>) : null}
                    {
                        data && data
                            .getUserById.posts
                            .map(post => (
                                <div key={post.id} className='post'>
                                    <div className='avatar'>
                                        <FontAwesomeIcon icon={faUser}/>
                                    </div>
                                    <div className='post-main'>
                                        <h4>{post.owner_name}</h4>
                                        <h2>{post.content}</h2>
                                        <div className='like'>
                                            <LikeBtn id={post.id}/>
                                            <div className='amount'>
                                                <p>{post.likes.amount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;