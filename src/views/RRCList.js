import React from 'react';
import RRCListItem from './RRCListItem.js';

function RRCList(props) {
    if (props.size === 0) {
        return <ul> <li>NO THINGS TO SHOW</li> </ul>
    } 
    return <ul>{props.map(thing => RRCListItem(thing))}</ul>;
}

export default RRCList
