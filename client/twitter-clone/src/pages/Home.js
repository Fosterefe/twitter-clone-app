import React from 'react'
import '../styles/Home.scss'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Home() {

    const current_user = localStorage.getItem('current_user'); 
    if(current_user) console.log(current_user)

    return (
        <div className='Home'>
            <div className='h-left'>
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-jwli3a r-4qtqp9 r-yyyyoo r-labphf r-1777fci r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr">
                    <g>
                        <path
                            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </g>
                </svg>
            </div>
            <div className='h-right'>
              <div className='h-up'>
                <FontAwesomeIcon icon={faTwitter} />
                <h1>Happening now</h1>
              </div>
              <div className='h-down'>
                  <div className='hd-u'>
                    <h3>Join Twitter Today</h3>
                  </div>
                  <div className='hd-btns'>
                      <Link to='/register' className='link-r' >Sing Up</Link>
                      <h4>Already have an account?</h4>
                      <br />
                      <br />
                      <Link to='/login' className='link-s'>Sing In</Link>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Home