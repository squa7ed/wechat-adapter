import { sysInfo } from "./Utils";
import { Document } from "./Document";

export class Window {

  constructor() {
    this._document = new Document();
  }

  private _document: Document;

  get innerWidth() { return sysInfo.windowWidth; }

  get innerHeight() { return sysInfo.windowHeight; }

  get screenWidth() { return sysInfo.screenWidth; }

  get screenHeight() { return sysInfo.screenHeight; }

  get document() { return this._document; }
}