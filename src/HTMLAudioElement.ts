import { HTMLMediaElement } from "./HTMLMediaElement";
import { Event } from "./Event";

const _context = new WeakMap<HTMLAudioElement, wx.InnerAudioContext>();

const onCanPlayEvents = ['load', 'loadend', 'canplay', 'canplaythrough', 'loadedmetadata'];

export class HTMLAudioElement extends HTMLMediaElement {
  constructor(src?: string) {
    super();
    let innerAudioContext = wx.createInnerAudioContext();
    _context.set(this, innerAudioContext);
    let _this = this;
    innerAudioContext.onCanplay(function () {
      onCanPlayEvents.forEach(eventType => {
        let event = new Event(eventType);
        event.target = _this;
        if (_this['on' + eventType]) {
          _this['on' + eventType](event);
        }
        _this.dispatchEvent(event);
      })
    });
    innerAudioContext.onPlay(function () {
      _this._paused = _context.get(_this).paused;
      let event = new Event('pause');
      event.target = _this;
      if (_this.onplay) {
        _this.onplay(event);
      }
      _this.dispatchEvent(<Event>{ type: 'play' });
    });
    innerAudioContext.onPause(function () {
      _this._paused = _context.get(_this).paused;
      let event = new Event('pause');
      event.target = _this;
      if (_this.onpause) {
        _this.onpause(event);
      }
      _this.dispatchEvent(event);
    });
    innerAudioContext.onEnded(function () {
      _this._paused = _context.get(_this).paused;
      if (_context.get(_this).loop === false) {
        let event = new Event('ended');
        event.target = _this;
        if (_this.onended) {
          _this.onended(event);
        }
        _this.dispatchEvent(event);
      }
    });
    innerAudioContext.onError(function () {
      _this._paused = _context.get(_this).paused;
      let event = new Event('error');
      event.target = _this;
      if (_this.onerror) {
        _this.onerror.call(_this, event);
      }
      _this.dispatchEvent(event);
    });
    if (src) {
      this.src = src;
    }
  }

  private _paused: boolean;

  get src() {
    return _context.get(this).src;
  }

  set src(value) {
    _context.get(this).src = value;
  }

  get paused() {
    return this._paused;
  }

  get currentTime() {
    return _context.get(this).currentTime;
  }

  set currentTime(value) {
    _context.get(this).seek(value);
  }

  pause() {
    _context.get(this).pause();
  }

  play() {
    _context.get(this).play();
  }
}