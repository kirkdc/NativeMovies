import EventEmitter from 'eventemitter3';

export const eventEmitter = new EventEmitter();

export const eventTypes = {
  FETCH_FAVS: 'FETCH_FAVS',
};
