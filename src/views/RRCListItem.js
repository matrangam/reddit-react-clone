import React from 'react';

function RRCListItem(props) {
    if (props.size === 0) {
        return <li></li>
    } 
    return ( 
        <li key={props.name}> 
            <p>{props.title}</p>
            <img src={props.url} alt={props.title}/> 
        </li>
    );
}
export default RRCListItem
