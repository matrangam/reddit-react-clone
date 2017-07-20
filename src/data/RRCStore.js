import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import RRCActionTypes from './RRCActionTypes';
import RRCDispatcher from './RRCDispatcher';

class RRCStore extends ReduceStore {
  constructor() {
    super(RRCDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case RRCActionTypes.GET_NEW:
        debugger;
        return state;

      default:
        return state;
    }
  }
}

export default new RRCStore();
