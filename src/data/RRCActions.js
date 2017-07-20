import RRCActionTypes from './RRCActionTypes';
import RRCDispatcher from './RRCDispatcher';

const Actions = {
  getNew() {
    RRCDispatcher.dispatch({
      type: RRCActionTypes.GET_NEW
    });
  },
};

export default Actions;
