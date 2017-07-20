import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import RRCActionTypes from './RRCActionTypes';
import RRCDispatcher from './RRCDispatcher';
import RRCThing from './RRCThing.js'
import sampleData from '../sampleData.json';

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
                state = this.parseResponse()
                return state;
            default:
                return state;
        }
    }

    parseResponse() {
        return sampleData.data.children.filter((child) => {
            if (!child.data.is_self) {
                return child
            }
        }).map((child) => {
            return new RRCThing({
                name: child.data.name,
                url: child.data.url,
                title: child.data.title,
                createdUtc: child.data.created_utc
            })
        })
    }
}

export default new RRCStore();
