import React from 'react'
import { useAddLike } from '../customHooks.js/mutationHooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

function LikeBtn({ id }) {
    const btn = useRef();
    const user = JSON.parse(localStorage.getItem('current_user'));

    const [addLike, { data, error }] = useAddLike();
    if(error) console.log(error.message);
    //if(data) console.log(data);

    const handleLike =  () => {
        if(btn.current.className === 'like-btn') {
            addLike({ variables: { add: true, userId: user.user.id, postId : id} })
            return btn.current.classList.toggle('liked')
        }
        if(btn.current.className !== 'like-btn') {
            addLike({ variables: { add: false, userId: user.user.id, postId : id} })
            return btn.current.classList.toggle('liked');
        }
    }

    return (
    <button onClick={() => handleLike()} ref={btn} className='like-btn'>
        <FontAwesomeIcon icon={faHeart} />
     </button>
    )
}

export default LikeBtn