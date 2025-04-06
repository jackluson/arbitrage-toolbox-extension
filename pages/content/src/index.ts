import { init } from '@src/inject';

document.addEventListener('DOMContentLoaded', evt => {
  init();
});

// 监听来自主环境的自定义事件
window.addEventListener('XHR_RESPONSE_EVENT', event => {
  // 将数据转发到扩展后台
  chrome.runtime.sendMessage({ type: 'XHR_RESPONSE', data: event.detail });
});
