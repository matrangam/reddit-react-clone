import React from 'react';
import RRCListItem from './RRCListItem.js';
import '../RRCList.css'

function RRCList(props) {
    if (props.size === 0) {
        return <div> <p>NO THINGS TO SHOW</p> </div>
    } 
    return <div className='RRCList'>{props.map(thing => RRCListItem(thing))}</div>;
}

export default RRCList
