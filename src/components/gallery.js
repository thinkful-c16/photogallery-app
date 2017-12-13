import React from 'react';
import PhotoList from './photolist'
import NextButton from './nextbutton'
import BackButton from './backbutton'
import Header from './header'
import ViewAll from './viewall'
import ViewAllButton from './viewallbutton'


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
            showGallery: (this.state.showGallery ? false : true) 
        })
    }
    
    render() {
//components are objects but we see tags
//cannot assign many elements to one variable
//
        let view;
        if (this.state.showGallery === false) {
            view = 
            <div>
                <PhotoList photos={this.props.photos} currentPhoto={this.state.currentImage} />
                <NextButton onClick={ () => this.nextImage()} />
                <BackButton onClick={ () => this.prevImage()} />
            </div>
        } else {
            view = <ViewAll photos={this.props.photos}/>
            
        }
            
        return (
        <div className='mainPage' >
            <Header />
            {view}
            <ViewAllButton onClick={() => this.toggle()} />
        </div>
        )
    }

}