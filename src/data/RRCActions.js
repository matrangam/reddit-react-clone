import RRCActionTypes from './RRCActionTypes';
import RRCDispatcher from './RRCDispatcher';
import {getTopPics} from '../network/RedditService.js'

const Actions = {
  getNew() {
    getTopPics().then((result) => {
      RRCDispatcher.dispatch({
        type: RRCActionTypes.GET_NEW,
        result: result
      });
    })
  },
};

export default Actions;
