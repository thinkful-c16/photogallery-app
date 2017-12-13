import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gallery from './components/gallery';
import animals from './images.json'

ReactDOM.render(<Gallery photos={animals}/>, document.getElementById('root')
);

