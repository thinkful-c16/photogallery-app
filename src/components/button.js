import React from 'react'
import './button.css'


export default function Button(props) {
    console.log(props)
    
    return (
    <div className='buttonContainer'>
            <input className='button' type="button" value={props.buttonText} onClick={ () => props.onClick()} />
    </div>
    )
}