import {LOCATION_OPS as _, WORKER_MESSAGES} from './../common/constants';
import Channel from './../common/channel';
import {DOCUMENT_NODE} from './../common/nodeType';

var body, channel, container, head, nodes = {};

export default (messageChannel) => {
    channel = messageChannel;
    return ({operation, args}) => {
        LocationOperations[operation](...args);
    }
}

const LocationOperations = {
    [_.replace](url) {
        location.replace(url);
    },
}
