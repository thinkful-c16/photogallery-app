import React from 'react';
import PhotoList from './photolist'
// import UserButtons from './userbuttons'
import NextButton from './nextbutton'


export default class  Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImage: 0
        }
    }

    updateImage() {
        this.setState({currentImage: this.state.currentImage+1})        
}
    
    render() {
        return (
        <div>
            <PhotoList photos={this.props.photos} currentPhoto={this.state.currentImage} />
            <NextButton onClick={ () => this.updateImage()}/>
        </div>
        )
    }

}