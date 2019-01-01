export function noop() { }

export const sysInfo = wx.getSystemInfoSync();

export const isDevTool = sysInfo.platform === 'devtools';