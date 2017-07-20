import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import RRCStore from '../data/RRCStore';

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

export default Container.createFunctional(AppView, getStores, getState);
