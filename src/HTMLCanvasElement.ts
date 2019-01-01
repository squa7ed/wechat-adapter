import { HTMLElement } from "./HTMLElement";
import { sysInfo } from "./Utils";

export class HTMLCanvasElement extends HTMLElement {

  private _innerCanvas: wx.Canvas;

  constructor() {
    super();
    this._innerCanvas = wx.createCanvas();
  }

  get width(): number { return this._innerCanvas.width; }

  get height(): number { return this._innerCanvas.height; }

  getContext(contextId: string, contextAttributes?: {}): CanvasRenderingContext2D | WebGLRenderingContext {
    return this._innerCanvas.getContext(contextId, contextAttributes);
  }

  toDataURL(): string {
    return this._innerCanvas.toDataURL();
  }

  getBoundingClientRect(): ClientRect | DOMRect {
    return {
      bottom: sysInfo.screenHeight,
      height: sysInfo.screenHeight,
      left: 0,
      right: sysInfo.screenWidth,
      top: 0,
      width: sysInfo.screenWidth,
      x: 0,
      y: 0
    };
  }
}