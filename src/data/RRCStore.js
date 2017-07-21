import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import RRCActionTypes from './RRCActionTypes';
import RRCDispatcher from './RRCDispatcher';
import RRCThing from './RRCThing.js'

class RRCStore extends ReduceStore {
    constructor() {
        super(RRCDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedSet();
    }

    reduce(state, action) {
        switch (action.type) {
            case RRCActionTypes.GET_NEW:
                state = this.parseResponse(action.result)
                return state;
            default:
                return state;
        }
    }

    parseResponse(result) {
        return result.data.children.filter((child) => {
            if (child.data.is_self) { return null }
            return child
        }).map((child) => {
            return new RRCThing({
                name: child.data.name,
                url: child.data.url,
                title: child.data.title,
                createdUtc: child.data.created_utc,
                previewSrc: this.getPreviewSrc(child.data.preview)
            })
        })
    }

    getPreviewSrc(preview) {
        return preview.images[0].resolutions[2].url
    }
}

export default new RRCStore();
