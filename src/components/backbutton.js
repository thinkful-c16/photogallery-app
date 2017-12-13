import React from 'react';
import './backbutton.css'
// import PhotoList from './photolist.js'

export default function BackButton(props) {
    
    return (
        <div>
            <input className='button' type="button" value="Prev Image" onClick={() => props.onClick()} />
        </div>
    )
}