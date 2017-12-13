import React from 'react';
import PhotoList from './photos'
// import UserButtons from './userbuttons'

export default class Gallery extends React.Component {
    constructor(props) {
        super(props)
        // this.state
    }

    render() {
        return (
            <main>
                <PhotoList photos={Photos}/>
                {/* <UserButtons /> */}
            </main>
        )
    }
}