import { Event } from "./Event";

export type EventHandlerCallback = (event: Event) => void;

export class EventTarget {
  constructor() {
    this._events = new Map();
  }

  private _events: Map<string, EventHandler[]>;

  addEventListener(type: string, callback: EventHandlerCallback, options?: AddEventListenerOptions): void {
    if (!this._events.has(type)) {
      this._events.set(type, []);
    }
    this._events.get(type).push(new EventHandler(callback, options && options.once));
  }

  removeEventListener(type: string, callback: EventHandlerCallback, options?: EventListenerOptions): void {
    if (!this._events.has(type)) {
      return;
    }
    let list = this._events.get(type);
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if (element.callback === callback) {
        list.splice(index, 1)[0].callback = undefined;
        break;
      }
    }
    if (list.length === 0) {
      this._events.delete(type);
    }
  }

  dispatchEvent(event: Event) {
    if (!this._events.has(event.type)) {
      return;
    }
    let list = this._events.get(event.type);
    let pending = [];
    list.forEach(handler => {
      handler.callback(event);
      if (handler.once) {
        pending.push(handler);
      }
    });
    pending.forEach(handler => {
      let index = list.indexOf(handler);
      list.splice(index, 1)[0].callback = undefined;
    });
    if (list.length === 0) {
      this._events.delete(event.type);
    }
  }
}

class EventHandler {
  constructor(public callback: EventHandlerCallback, public once?: boolean) {
    this.once = !!once;
  }
}
