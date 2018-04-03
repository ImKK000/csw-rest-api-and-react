import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Bear from './Bear';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Bear />, document.getElementById('root'));
registerServiceWorker();
