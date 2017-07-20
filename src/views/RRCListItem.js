import React from 'react';

function RRCListItem(props) {
    if (props.size === 0) {
        return <div></div>
    } 
    return (
        <a href={props.url} key={props.name}>
            <figure>
                <img src={props.previewSrc} alt={props.title}/> 
            </figure>
            <figcaption>{props.title}</figcaption>
        </a>
    );
}

export default RRCListItem
