import { HTMLElement } from "./HTMLElement";

const _images = new WeakMap<HTMLImageElement, wx.Image>();

export class HTMLImageElement extends HTMLElement {
  constructor(width?: number, height?: number) {
    super();
    let img = wx.createImage();
    _images.set(this, img);
  }

  get src() { return _images.get(this).src; }

  set src(value) { _images.get(this).src = value; }

  get width() { return _images.get(this).width; }

  set width(value) { _images.get(this).width = value; }

  get height() { return _images.get(this).height; }

  set height(value) { _images.get(this).height = value; }

  get onload() { return _images.get(this).onload; }

  set onload(value) { _images.get(this).onload = value; }

  get onerror() { return _images.get(this).onerror; }

  set onerror(value) { _images.get(this).onerror = value; }

}