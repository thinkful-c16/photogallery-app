import React from 'react';
import './viewall.css'

export default function ViewAll(props) {
    const imageList = props.photos.map((image, index) => {
        return (
        <li className='viewAllItem' key={index}>
        <img src={image.src} alt={image.alt} />
        </li>
        )
    });
    return (
        <div className='viewall'>
        {imageList}
        
        </div>
    )
}