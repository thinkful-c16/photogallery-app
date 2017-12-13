import React from 'react';
import PhotoList from './photolist.js'

export default function BackButton(props) {
    
    return (
        <div>
            <input type="button" value="Prev Image" onClick={() => props.onClick()} />
        </div>
    )
}