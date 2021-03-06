import React from 'react';
import spinner from '../spinner.svg'

const styles = {
    loader: {
        height: '100px',
        width: '100%',
        textAlign: 'center',
        padding: '1em',
        margin: '0 auto 1em',
        display: 'inline-block',
        verticalAlign: 'top'
    }
}

export default (props) => (
    <div style={styles.loader}>
        <img src={spinner} alt="Loading Spinner" />
    </div>
);



