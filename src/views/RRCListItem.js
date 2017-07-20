import React from 'react';

function RRCListItem(props) {
    if (props.size === 0) {
        return <div></div>
    } 
    return ( 
        <div className='RRCListItem' key={props.name}> 
            <p>{props.title}</p>
            <img src={props.previewSrc} alt={props.title}/> 
        </div>
    );
}

export default RRCListItem
