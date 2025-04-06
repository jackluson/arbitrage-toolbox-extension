export const init = function () {
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;

  // 重写 open 方法以记录请求信息
  XMLHttpRequest.prototype.open = function (method, url) {
    console.log('url', url);
    this._requestDetails = { method, url };
    originalOpen.apply(this, arguments);
  };

  // 重写 send 方法并添加事件监听
  XMLHttpRequest.prototype.send = function (body) {
    this.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        // 请求完成
        const response = {
          url: this._requestDetails.url,
          method: this._requestDetails.method,
          status: this.status,
          response: this.response, // 可能为 JSON、文本或二进制数据
          responseText: this.responseText, // 文本内容
        };
        console.log('init response', response);

        // 将结果发送到扩展后台
        // chrome.runtime.sendMessage({ type: 'XHR_RESPONSE', data: response });
      }
    });
    originalSend.apply(this, arguments);
  };
};
