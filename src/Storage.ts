export class Storage {

  get length() { return wx.getStorageInfoSync().keys.length; }

  clear(): void {
    wx.clearStorageSync();
  }

  getItem(key: string): any {
    return wx.getStorageSync(key);
  }

  key(index: number): string {
    let info = wx.getStorageInfoSync();
    if (index < 0 || index >= info.keys.length) {
      throw "Array index out of range";
    }
    return info.keys[index];
  }

  removeItem(key: string): void {
    wx.removeStorageSync(key);
  }

  setItem(key: string, value: any): void {
    wx.setStorageSync(key, value);
  }
}