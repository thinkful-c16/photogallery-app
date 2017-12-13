import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gallery from './components/gallery';
import images from './images.json'

ReactDOM.render(<Gallery photos={images}/>, document.getElementById('root')
);

