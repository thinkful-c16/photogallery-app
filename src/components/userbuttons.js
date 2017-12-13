import React from 'react';
import PhotoList from './photolist.js'

export default function NextButton(props) {
    
    return (
        <div>
            <input type="button" value="Next" onClick={e => console.log(e.target.value)} />
        </div>
    )
}