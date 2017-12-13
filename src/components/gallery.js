import React from 'react';
import PhotoList from './photolist'
// import UserButtons from './userbuttons'
import NextButton from './userbuttons'

// export default class Gallery extends React.Component {
//     constructor(props) {
//         super(props)
//         // this.state
//     }

//     render() {
//         return (
//             <main>
//                 <PhotoList photos={props.photos}/>
//                 {/* <UserButtons /> */}
//             </main>
//         )
//     }
// }

export default function Gallery(props) {
    
    return (
        <div>
            <PhotoList photos={props.photos} />
            <NextButton />
        </div>
    )
}