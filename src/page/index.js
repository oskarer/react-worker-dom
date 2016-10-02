import Channel from './../common/channel';
import {WORKER_MESSAGES as _} from './../common/constants';
import Dom from './Dom';
import Location from './Location';

class ReactWorker {
    constructor(worker, container) {
        this.container = container;
        this.channel = new Channel(worker);
        this.channel.onMessage(this.handleMessage.bind(this));
        this.domOperation = Dom(container, this.channel);
        this.locationOperation = Location(this.channel);
    }

    handleMessage(type, payload) {
        switch (type) {
            case _.renderQueue:
                var start = performance.now();
                payload.forEach(op => this.domOperation(op));
                /*this.channel.send(_.renderTime, {
                    time: performance.now() - start,
                    count: payload.length
                });*/
                break;
            case _.location:
                this.locationOperation(payload)
                break;
            default:
                console.log('Cannot handle message %s', type, payload);
        }
    }
}

module.exports = {
    render: function (worker, container) {
        return new ReactWorker(worker, container);
    }
}
