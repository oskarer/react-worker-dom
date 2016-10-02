import Channel from '../common/channel';
import {WORKER_MESSAGES as _, LOCATION_OPS} from '../common/constants';

const location = self.location;
const channel = new Channel(self);

location.replace = function(url) {
  channel.send(_.location, {
    operation: LOCATION_OPS.replace,
    args: [...arguments]
  });
}

export default location;
