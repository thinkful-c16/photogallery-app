import React from 'react'
import './button.css'


export default function Button(props) {
    
    return (
        <div>
            <input className='button' type="button" value={props.buttonText} onClick={() => props.onClick()} />
        </div>
    )
}