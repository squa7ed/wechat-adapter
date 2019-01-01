import { HTMLElement } from "./HTMLElement";
import { EventHandlerCallback } from "./EventTarget";

export class HTMLMediaElement extends HTMLElement {
  constructor() {
    super();
  }

  currentTime: number;

  duration: number;

  loop: boolean;

  readonly paused: boolean;

  readyState: number;

  src: string;

  volume: number;

  oncanplay: EventHandlerCallback;

  oncanplaythrough: EventHandlerCallback;

  onerror: EventHandlerCallback;

  onended: EventHandlerCallback;

  onpause: EventHandlerCallback;

  onplay: EventHandlerCallback;

  load() {
    console.warn('Not emplemented.');
  }

  pause() {
    console.warn('Not emplemented.');
  }

  play() {
    console.warn('Not emplemented.');
  }

}