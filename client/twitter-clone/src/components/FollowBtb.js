import React from 'react'
import { useState } from 'react';
import { useNewFollow, useGetUserById } from '../customHooks.js/mutationHooks';

function FollowBtb({ myId, userId, clicked }) {
    const [addFollow, {error}] = useNewFollow();
    if(error) console.log(error);

    const [resetUser, {data}] = useGetUserById();
    if(data) {
        console.log(data)
        const local_user = JSON.parse(localStorage.getItem('current_user'));
        local_user.user.follows = [...data.getUserById.follows];

        return localStorage.setItem('current_user', JSON.stringify(local_user));
    }

    const handleFollow = async () => {
        await addFollow({ variables: { myId, userId } });

        resetUser({ variables: { getUserByIdId: JSON.parse(localStorage.getItem('current_user')).user.id } })
    }

    return (
        <>
            {  
                clicked === false ? <button className='follow-btn' onClick={handleFollow}>Follow</button> : <p>Following</p>
            }
        </>
    )
    
}

//<button className='follow-btn' onClick={handleFollow}>Follow</button>

export default FollowBtb