import { HTMLCanvasElement } from "./HTMLCanvasElement";
import { noop, isDevTool } from "./Utils";
import { HTMLAudioElement } from "./HTMLAudioElement";
import { HTMLImageElement } from "./HTMLImageELement";
import { TouchEvent } from "./TouchEvent";
import { Window } from "./Window";
import { Document } from "./Document";
import { Storage } from "./Storage";

declare const GameGlobal: {
  canvas: HTMLCanvasElement,
  Image: new () => HTMLImageElement,
  Audio: new (src: string) => HTMLAudioElement,
  performance: Performance;
  window: Window,
  document: Document,
  localStorage: Storage
};

let global = GameGlobal;

// expose a global canvas.
global.canvas = global.canvas || new HTMLCanvasElement();

// global variables
global.Image = HTMLImageElement;

global.Audio = HTMLAudioElement;

global.performance = wx.getPerformance();

if (!isDevTool) {
  // performance.now() acts differently on devtool and a real device.
  let now = global.performance.now;
  global.performance.now = () => now() / 1000;

  // can't redefine window on devtool
  global.window = new Window();
  global.document = global.window.document;
}

global.localStorage = new Storage();

// wx events

// touch events
function touchEventHandlerFactory(type) {
  return function (event) {
    let touchEvent = new TouchEvent(type);
    touchEvent.touches = event.touches;
    touchEvent.targetTouches = Array.prototype.slice.call(event.touches);
    touchEvent.changedTouches = event.changedTouches;
    touchEvent.timeStamp = event.timeStamp;
    global.canvas.dispatchEvent(touchEvent);
  };
}

wx.onTouchStart(touchEventHandlerFactory('touchstart'));
wx.onTouchMove(touchEventHandlerFactory('touchmove'));
wx.onTouchEnd(touchEventHandlerFactory('touchend'));
wx.onTouchCancel(touchEventHandlerFactory('touchcancel'));

