import { EventTarget } from "./EventTarget";

export class Event {
  constructor(public readonly type: string) {
    this.timeStamp = performance.now();
  }

  timeStamp: number;

  target: EventTarget;

  preventDefault(): void { }
  
}