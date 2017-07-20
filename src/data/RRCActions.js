import RRCActionTypes from './RRCActionTypes';
import RRCDispatcher from './RRCDispatcher';

const Actions = {
  addTodo(text) {
    RRCDispatcher.dispatch({
      type: RRCActionTypes.GET_NEW,
      text,
    });
  },
};

export default Actions;
