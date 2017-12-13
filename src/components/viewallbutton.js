import React from 'react'
import './viewallbutton.css'


export default function ViewAllButton(props) {
    
    return (
        <div>
            <input className='viewAllButton' type="button" value="See all Images" onClick={() => props.onClick()} />
        </div>
    )
}