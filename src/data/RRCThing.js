import Immutable from 'immutable';

const RRCThing = Immutable.Record({
    name: '',
    url: '',
    title: '',
    createdUtc: '',
    isSelf: false
});

export default RRCThing;