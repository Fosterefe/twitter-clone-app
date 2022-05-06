import React from 'react'
import '../styles/AddPostInput.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMarker} from '@fortawesome/free-solid-svg-icons'

const AddPostInput = React.forwardRef(({submitForm, value, changeValue}, ref) => {

    return (
        <div ref={ref} className='addPost'>
            <form onSubmit={(e) => submitForm(e)}>
                <div className='add-in'>
                    <FontAwesomeIcon icon={faMarker}/>
                    <textarea type='text' placeholder="¿What's happening?" value={value} onChange={(e) => changeValue(e.target.value)} required/>
                </div>
                <div className='add-submit'>
                    <button type='submit'>Tweet</button>
                </div>
            </form>
        </div>
    )
})

export default AddPostInput