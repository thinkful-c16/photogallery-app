import React from 'react';
import PhotoList from './photolist'
import Header from './header'
import ViewAll from './viewall'
import Button from './button'


export default class  Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImage: 0,
            showGallery: false
        }
    }

    nextImage() {
        if (this.state.currentImage >= 4 ) {this.setState({currentImage: 0}) 
        } else {this.setState({currentImage: this.state.currentImage+1})}
}
    prevImage() {
        if (this.state.currentImage <= 0 ) {this.setState({currentImage: 4})
    } else {this.setState({currentImage: this.state.currentImage-1})}
}

    toggle() {
        this.setState({
            //bang means not
            //not false means true
            //then set not true
            //bang helps you toggle a boolean value
            //bang true (!true) is always false
            // showGallery: !this.state.showGallery (use on anything truthy or falsey)
            showGallery: (this.state.showGallery ? false : true)
        })
    }
    
    render() {
//components are objects but we see tags
//cannot assign many elements to one variable
//can have multiple return statements
        let view;
        if (this.state.showGallery === false) {
            view = 
            <div>
                <PhotoList photos={this.props.photos} currentPhoto={this.state.currentImage} />
                <Button buttonText='Next Image' onClick={ () => this.nextImage()} />
                <Button buttonText='Prev Image' onClick={ () => this.prevImage()} />
            </div>
        } else {
            view = <ViewAll photos={this.props.photos}/>
            
        }
            
        return (
        <div className='mainPage' >
            <Header />
            {view}
            <Button buttonText={this.state.showGallery ? 'Go Back' : 'Show all images'} onClick={() => this.toggle()} />
        </div>
        )
    }

}