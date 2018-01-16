import React from 'react';
import './photolist.css'

//children takes data and parent does logic and pass variables to the children

export default function Photos(props) {
    const imageList = props.photos.map((image, index) => {

        return (
        <li key={index}>
        <img src={image.src} alt={image.alt} />
        </li>
        )
    });
    //increment image
    // const random = imageList[Math.floor(imageList.length * Math.random())]
    //anything that needs to be a variable should be a prop and it must be changed from the parent component
return (
    <ul className="image-list">
    {imageList[props.currentPhoto]}
    </ul>
);

}