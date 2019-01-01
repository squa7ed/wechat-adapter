import { Event } from "./Event";

export class TouchEvent extends Event {
  constructor(public readonly type: string) {
    super(type);
  }

  touches: Touch[]

  targetTouches: Touch[]

  changedTouches: Touch[]
}

export interface Touch {

  /**
   * Touch 对象的唯一标识符，只读属性。一次触摸动作(我们值的是手指的触摸)在平面上移动的整个过程中, 该标识符不变。可以根据它来判断跟踪的是否是同一次触摸过程。
   */
  identifier: number;

  /**
   * 触点相对于屏幕左边沿的 X 坐标。
   */
  screenX: number;

  /**
   * 触点相对于屏幕上边沿的 Y 坐标。
   */
  screenY: number;
}