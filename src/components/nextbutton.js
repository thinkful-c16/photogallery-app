import React from 'react';
import PhotoList from './photolist.js'

export default function NextButton(props) {
    
    return (
        <div>
            <input type="button" value="Next Image" onClick={() => props.onClick()} />
        </div>
    )
}