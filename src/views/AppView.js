import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function AppView(props) {

    if (props.things.size === 0) {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    } else {
        console.log('THINGS: ', props);
        return (
            <div className="App">
                PLACE THE THINGS HERE!
            </div>
        );
    }
}

export default AppView;