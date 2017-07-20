import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import RRCStore from '../data/RRCStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'roboto-npm-webfont';

function getStores() {
  return [
    RRCStore,
  ];
}

function getState() {
  return {
    things: RRCStore.getState(),
  };
}

injectTapEventPlugin();
export default Container.createFunctional(AppView, getStores, getState);
