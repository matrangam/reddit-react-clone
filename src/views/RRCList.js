import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '90%',
        overflowY: 'auto',
    },
};

const buildGridTiles = (props) => {
    return props.map((tile) => (
        <GridTile
            key={tile.name}
            title={tile.title}
            style={styles.gridItem}
            actionPosition="left"
            titlePosition="top"
            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
            <img src={tile.previewSrc} alt={tile.title} />
        </GridTile>
    ))
}

export default (props) => (
    <div style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}>
            {buildGridTiles(props)}
        </GridList>
    </div>
);
