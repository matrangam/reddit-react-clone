import React from 'react';
import logo from '../logo.svg';
import RRCList from './RRCList.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './RRCTitleBar.js'
import Spinner from './Spinner.js'

export default (props) => {
    return (
        <MuiThemeProvider>              
            <div>
                <TitleBar></TitleBar>
                {props.things.length === 0 ? <Spinner></Spinner> : RRCList(props.things)}  
                
            </div>
        </MuiThemeProvider>
    )
}