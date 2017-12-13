import React from 'react';
import './photolist.css'

export default function Photos(props) {
    console.log(props)
    const imageList = props.photos.map((image, index) => {
        return (
        <li key={index}>
        <img src={image.src} alt={image.alt} />
        </li>
        )
    });
    const random = imageList[Math.floor(imageList.length * Math.random())]
return (
    <ul className="image-list">
    {random}
    </ul>
);

}