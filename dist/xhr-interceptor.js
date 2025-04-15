var init = function () {
  const hijackUrlList = ['v5/stock/screener/fund/list.json'];
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;

  // 重写 open 方法以记录请求信息
  XMLHttpRequest.prototype.open = function (method, url) {
    const isHijackUrl = hijackUrlList.some(item => this.responseURL.includes(item));
    if (isHijackUrl) {
      this._requestDetails = { method, url };
    }
    originalOpen.apply(this, arguments);
  };

  // 重写 send 方法并添加事件监听
  XMLHttpRequest.prototype.send = function (body) {
    this.addEventListener('readystatechange', function () {
      const isHijackUrl = hijackUrlList.some(item => this.responseURL.includes(item));
      if (this.readyState === 4 && isHijackUrl) {
        // 请求完成
        const response = {
          url: this.responseURL,
          // method: this._requestDetails.method,
          status: this.status,
          responseType: this.responseType, // 响应类型
          response: this.response, // 可能为 JSON、文本或二进制数据
          responseText: this.responseText, // 文本内容
        };
        // console.log("response", response);
        // 将结果发送到扩展后台
        window.dispatchEvent(new CustomEvent('XHR_RESPONSE_EVENT', { detail: response }));
      }
    });
    originalSend.apply(this, arguments);
  };
};
init();
