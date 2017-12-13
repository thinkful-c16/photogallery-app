import React from 'react';
import './nextbutton.css'

export default function NextButton(props) {
    
    return (
        <div>
            <input className='button' type="button" value="Next Image" onClick={() => props.onClick()} />
        </div>
    )
}