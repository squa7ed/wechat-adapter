declare namespace wx {

  // Common types
  type Callback = () => void;

  type PromiseArgument = {
    /**
     * 接口调用成功的回调函数
     */
    success?: Callback;
    /** 
     * 接口调用失败的回调函数
     */
    fail?: Callback;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Callback;
  }


  // Data cache  
  function clearStorage(arg: PromiseArgument): void;

  function clearStorageSync(): void;

  function getStorage(arg: GetStorageArgument): any;

  function getStorageInfo(arg: PromiseArgument): void;

  function getStorageInfoSync(): StorageInfo;

  function getStorageSync(key: string): any;

  function removeStorage(res: GetStorageArgument): void;

  function removeStorageSync(key: string): void;

  function setStorage(res: GetStorageArgument): void;

  function setStorageSync(key: string, data: any): void;

  type GetStorageArgument = {
    /**
     * 本地缓存中指定的 key
     */
    key: string;
    /**
     * 接口调用成功的回调函数
    */
    success?: Callback;
    /** 
     * 接口调用失败的回调函数
     */
    fail?: Callback;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete: Callback;
  }

  type SetStorageArgument = {
    /**
     * 本地缓存中指定的 key
     */
    key: string;
    /**
     * 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象
     */
    data: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: Callback;
    /** 
     * 接口调用失败的回调函数
     */
    fail?: Callback;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete: Callback;
  }

  type StorageInfo = {
    /**
     * 当前 storage 中所有的 key
     */
    keys: Array<string>;
    /**
     * 当前占用的空间大小, 单位 KB
     */
    currentSize: number;
    /**
     * 限制的空间大小，单位 KB
     */
    limitSize: number;

  }

  // Media
  /**
   * 基础库 1.6.0 开始支持，低版本需做兼容处理。
   */
  function createInnerAudioContext(): InnerAudioContext;

  interface InnerAudioContext {
    /**
     *
     * 音频资源的地址，用于直接播放。2.2.3 开始支持云文件ID
     */
    src: string;

    /**
     *
     * 开始播放的位置（单位：s），默认为 0
     */
    startTime: number;

    /**
     *
     * 是否自动开始播放，默认为 false
     */
    autoplay: boolean;

    /**
     *
     * 是否循环播放，默认为 false
     */
    loop: boolean;

    /**
     *
     * 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音
     */
    obeyMuteSwitch: boolean;

    /**
     *
     * 基础库 1.9.90 开始支持，低版本需做兼容处理。 音量。范围 0~1。默认为 1
     */
    volume: number;

    /**
     *
     *当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读）
     */
    duration: number;

    /**
     *
     *当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读）
     */
    currentTime: number;

    /**
     *
     *当前是是否暂停或停止状态（只读）
     */
    paused: boolean;

    /**
     *
     *音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读）
     */
    buffered: number;

    /**
     *
     * 播放
     */
    play(): void;

    /**
     *
     * 暂停。暂停后的音频再播放会从暂停处开始播放
     */
    pause(): void;

    /**
     *
     *停止。停止后的音频再播放会从头开始播放。
     */
    stop(): void;

    /**
     * 跳转到指定位置
     * @param position 
     */
    seek(position: number): void;

    /**
     *
     *销毁当前实例
     */
    destroy(): void;

    /**
     *
     * 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放
     * @param callback 事件回调函数 
     */
    onCanplay(callback: Callback): void;

    /**
     *
     * 取消监听音频进入可以播放状态的事件。但不保证后面可以流畅播放: void;
     * @param callback 事件回调函数 
     */
    offCanplay(callback: Callback): void;

    /**
     *
     *  监听音频播放事件: void;
     * @param callback 事件回调函数 
     */
    onPlay(callback: Callback): void;

    /**
     *
     *  取消监听音频播放事件: void;
     * @param callback 事件回调函数 
     */
    offPlay(callback: Callback): void;

    /**
     *
     *  监听音频暂停事件: void;
     * @param callback 事件回调函数 
     */
    onPause(callback: Callback): void;

    /**
     *
     *  取消监听音频暂停事件: void;
     * @param callback 事件回调函数 
     */
    offPause(callback: Callback): void;

    /**
     *
     *监听音频停止事件: void;
     * @param callback 事件回调函数 
     */
    onStop(callback: Callback);

    /**
     *
     *  取消监听音频停止事件: void;
     * @param callback 事件回调函数 
     */
    offStop(callback: Callback): void;

    /**
     *
     *  监听音频自然播放至结束的事件: void;
     * @param callback 事件回调函数 
     */
    onEnded(callback: Callback): void;

    /**
     *
     *  取消监听音频自然播放至结束的事件: void;
     * @param callback 事件回调函数 
     */
    offEnded(callback: Callback): void;

    /**
     *
     *  监听音频播放进度更新事件: void;
     * @param callback 事件回调函数 
     */
    onTimeUpdate(callback: Callback): void;

    /**
     *
     * 取消监听音频播放进度更新事件: void;
     * @param callback 事件回调函数 
     */
    offTimeUpdate(callback: Callback): void;

    /**
     *
     *  监听音频播放错误事件: void;
     * @param callback 事件回调函数 
     */
    onError(callback: Callback): void;

    /**
     *
     * 取消监听音频播放错误事件: void;
     * @param callback 事件回调函数 
     */
    offError(callback: Callback): void;

    /**
     *
     * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发: void;
     * @param callback 事件回调函数 
     */
    onWaiting(callback: Callback): void;

    /**
     *
     * 取消监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发: void;
     * @param callback 事件回调函数 
     */
    offWaiting(callback: Callback): void;

    /**
     *
     * 监听音频进行跳转操作的事件: void;
     * @param callback 事件回调函数 
     */
    onSeeking(callback: Callback): void;

    /**
     *
     * 取消监听音频进行跳转操作的事件: void;
     * @param callback 事件回调函数 
     */
    offSeeking(callback: Callback): void;

    /**
     *
     * 监听音频完成跳转操作的事件: void;
     * @param callback 事件回调函数 
     */
    onSeeked(callback: Callback): void;

    /**
     * 
     * 取消监听音频完成跳转操作的事件: void;
     * @param callback 事件回调函数 
     */
    offSeeked(callback: Callback): void;
  }

  // MiniProgram  
  // Touch Event
  function onTouchStart(callback: TouchCallback): void;

  function onTouchMove(callback: TouchCallback): void;

  function onTouchEnd(callback: TouchCallback): void;

  function onTouchCancel(callback: TouchCallback): void;

  function offTouchStart(callback: TouchCallback): void;

  function offTouchMove(callback: TouchCallback): void;

  function offTouchEnd(callback: TouchCallback): void;

  function offTouchCancel(callback: TouchCallback): void;

  // Lifecycle
  /**
   * 退出当前小游戏
   * @param object 
   */
  function exitMiniProgram(object: PromiseArgument): void;

  /**
   * 获取小游戏启动时的参数。
   */
  function getLaunchOptionsSync(): LaunchOption;

  /**
   * 取消监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。
   * @param callback 
   */
  function offHide(callback: Callback): void;

  /**
   * 取消监听小游戏回到前台的事件
   * @param callback 
   */
  function offShow(callback: Callback): void;
  /**
   * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。
   * @param callback 
   */
  function onHide(callback: Callback): void;

  /**
   * 监听小游戏回到前台的事件
   * @param callback 
   */
  function onShow(callback: (res: LaunchOption) => void): void;

  type LaunchOption = {
    /**
     * 打开小游戏的场景值
     */
    scene: number;
    /**
     * 打开小游戏的启动参数 query	
     */
    query: Object;
    /**
     * shareTicket，详见获取更多转发信息
     */
    shareTicket: string;
    /**
     * 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}。(参见后文注意)
     */
    referrerInfo: ReferrerInfo;
  }

  type ReferrerInfo = {
    /**
     * 来源小程序、公众号或 App 的 appId	
     * 场景值    场景	                                          appId含义
     * 1020     公众号 profile 页相关小程序列表                  来源公众号
     * 1035     公众号自定义菜单                                 来源公众号
     * 1036     App 分享消息卡片                                来源App
     * 1037	    小程序打开小程序                                 来源小程序
     * 1038	    从另一个小程序返回                               来源小程序
     * 1043	    公众号模板消息                                   来源公众号
     */
    appId: string;
    /**
     * 来源小程序传过来的数据，scene=1037或1038时支持
     */
    extraData: object;
  }

  type TouchCallbackArgument = {
    /**
     * 当前所有触摸点的列表
     */
    touches: Array<Touch>
    /**
     * 触发此次事件的触摸点列表	
     */
    changedTouches: Array<Touch>
    /**
     * 事件触发时的时间戳
     */
    timeStamp: number
  }

  type TouchCallback = (res: TouchCallbackArgument) => void;

  // Performance
  /**
   * 获取性能管理器
   */
  function getPerformance(): Performance;
  /**
   * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。
   * GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
   */
  function triggerGC(): void;

  // Render
  function createCanvas(): Canvas;

  function createImage(): Image;

  interface Canvas {
    width: number;

    height: number;

    getContext(contextId: "2d", contextAttributes?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D;

    getContext(contextId: "webgl", contextAttributes?: WebGLContextAttributes): WebGLRenderingContext;

    getContext(contextId: string, contextAttributes?: {}): CanvasRenderingContext2D | WebGLRenderingContext;

    toDataURL(): string;

    getBoundingClientRect(): ClientRect | DOMRect;
  }

  interface Image {
    /**
     * 图片的 URL
     */
    src: string;
    /**
     * 图片的真实宽度
     */
    width: number;
    /**
     * 图片的真实高度
     */
    height: number;
    /**
     * 图片加载完成后触发的回调函数
     */
    onload: Callback;
    /**
     * 图片加载发生错误后触发的回调函数
     */
    onerror: Callback;
  }

  // System
  function getSystemInfoSync(): SystemInfo;

  type SystemInfo = {
    /**
    * 手机品牌	1.5.0
    */
    brand: string;
    /**
    * 手机型号	
    */
    model: string;
    /**
    * 设备像素比	
    */
    pixelRatio: number;
    /**
    * 屏幕宽度	1.1.0
    */
    screenWidth: number;
    /**
    * 屏幕高度	1.1.0
    */
    screenHeight: number;
    /**
    * 可使用窗口宽度	
    */
    windowWidth: number;
    /**
    * 可使用窗口高度	
    */
    windowHeight: number;
    /**
    * 状态栏的高度	1.9.0
    */
    statusBarHeight: number;
    /**
    * 微信设置的语言	
    */
    language: string;
    /**
    * 微信版本号	
    */
    version: string;
    /**
    * 操作系统版本	
    */
    system: string;
    /**
    * 客户端平台	
    */
    platform: string;
    /**
    * 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。	1.5.0
    */
    fontSizeSetting: number;
    /**
    * 客户端基础库版本	1.1.0
    */
    SDKVersion: string;
    /**
    * (仅Android小游戏) 性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好 (目前设备最高不到50)	1.8.0
    */
    benchmarkLevel: number;
  }

  // 

}