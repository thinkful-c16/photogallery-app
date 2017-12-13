import React from 'react';
import PhotoList from './photolist'
// import UserButtons from './userbuttons'
import NextButton from './nextbutton'
import BackButton from './backbutton'


export default class  Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImage: 0
        }
    }

    nextImage() {
        if (this.state.currentImage > 4 ) {this.setState({currentImage: 0}) 
        } else {this.setState({currentImage: this.state.currentImage+1})}
}
    prevImage() {
        if (this.state.currentImage < 0 ) {this.setState({currentImage: 4})
    } else {this.setState({currentImage: this.state.currentImage-1})}
}
    
    render() {
        return (
        <div>
            <PhotoList photos={this.props.photos} currentPhoto={this.state.currentImage} />
            <NextButton onClick={ () => this.nextImage()} />
            <BackButton onClick={ () => this.prevImage()} />
        </div>
        )
    }

}