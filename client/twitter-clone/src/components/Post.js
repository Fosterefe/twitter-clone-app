import React from 'react';
import '../styles/Post.scss';
import { useGetAllPosts } from '../customHooks.js/queriesHooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';

function Post() {

  const { data, error, loading } = useGetAllPosts();
  if(error) console.log(error)

  return (
    <div className='Post-list'>
    { loading && <p>Loading Posts</p> }
    { 
      data && data.getAllPosts.map(post => (
        <div key={post.id} className='post'>
          <div className='avatar'>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className='post-main'>
              <h4>{post.owner_id}</h4>
              <h2>{post.content}</h2>
              <div className='like'>
                <button className='like-btn'>
                   <FontAwesomeIcon icon={faHeart}/>
                </button>
                <div className='amount'>
                  <p>{post.likes.amount}</p>
                </div>
              </div>
          </div>
        </div>
      )) 
    }
    </div>
  )
}

export default Post