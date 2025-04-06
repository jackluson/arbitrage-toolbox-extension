const init = () => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url?.includes('xueqiu.com') && changeInfo.status === 'loading') {
      // 页面开始加载时触发
      injectScript(tabId);
    }
  });
};

async function injectScript(tabId: number) {
  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ['xhr-interceptor.js'], // 关键拦截脚本
      injectImmediately: true, // 立即注入，不等待页面其他资源
      world: 'MAIN', // 使用主执行环境（覆盖页面原生对象）
    });
  } catch (err) {
    console.error('注入失败:', err);
  }
}

export { init };
