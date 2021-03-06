/**
 * Member model events
 */

'use strict';

import {EventEmitter} from 'events';
var Member = require('../../sqldb').Member;
var MemberEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MemberEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Member.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    MemberEvents.emit(event + ':' + doc._id, doc);
    MemberEvents.emit(event, doc);
    done(null);
  }
}

module.exports = MemberEvents;
