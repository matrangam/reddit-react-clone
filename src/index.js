import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import RRCActions from './data/RRCActions.js'

ReactDOM.render(<AppContainer />, document.getElementById('root'));

RRCActions.getNew();