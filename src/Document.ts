import { HTMLCanvasElement } from "./HTMLCanvasElement";
import { Node } from "./Node";
import { EventHandlerCallback } from "./EventTarget";
import { Event } from "./Event";

export class Document extends Node {
  constructor() {
    super();
    this._hidden = false;
    wx.onShow((option: wx.LaunchOption) => {
      let event = new Event('visibilitychange');
      event.target = this;
      this._hidden = false;
      if (this.onvisibilitychange) {
        this.onvisibilitychange(event);
      }
      this.dispatchEvent(event);
    });
    wx.onHide(() => {
      let event = new Event('visibilitychange');
      event.target = this;
      this._hidden = true;
      if (this.onvisibilitychange) {
        this.onvisibilitychange(event);
      }
      this.dispatchEvent(event);
    });
  }

  private _hidden: boolean;

  get hidden() { return this._hidden; }

  createElement(tag: string) {
    switch (tag) {
      case 'canvas':
        return new HTMLCanvasElement();
      case 'image':
        return new Image();
      case 'audio':
        return new Audio();
    }
  }

  onvisibilitychange: EventHandlerCallback;
}