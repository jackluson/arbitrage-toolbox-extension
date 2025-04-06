import 'webextension-polyfill';
import { exampleThemeStorage, fundMapStorage } from '@arbitrage-toolbox/storage';
import { init } from './inject';

init();
exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});
const cacheMap = new Map<string, any>();
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'XHR_RESPONSE') {
    console.log('拦截到 XHR 响应:', message.data);
    try {
      const json = JSON.parse(message.data.response);
      console.log('json', json);
      const obj: Record<string, any> = {};
      const { error_code, data } = json;
      if (error_code === 0 && data?.list?.length > 0) {
        for (const item of data.list) {
          const { symbol } = item;
          cacheMap.set(symbol, item);
          obj[symbol] = item;
        }
      }
      console.log('cacheMap', cacheMap);
      fundMapStorage.set(Object.fromEntries(cacheMap));
    } catch (error) {
      console.log('XHR_RESPONSE->error', error);
    }
    // 这里可以存储数据或通知弹出页面
  }
});

// chrome.webRequest.onHeadersReceived.addListener(
//   async (details) => {
//     console.log("detais", details);
//     if (details.type === 'main_frame') {
//       const filter = { urls: ['<all_urls>'] };
//     }
//   },
//   { urls: ['<all_urls>'] }
// );

console.log('Background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");
