import React from 'react';
import '../styles/Post.scss';
import { useGetAllPosts } from '../customHooks.js/queriesHooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import  LikeBtn from './LikeBtn';
import { Link } from 'react-router-dom';

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
              <Link to={`/user/${post.owner_id}`}><h4>{post.owner_name}</h4></Link>
              <h2>{post.content}</h2>
              <div className='like'>
                <LikeBtn id={post.id} />
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