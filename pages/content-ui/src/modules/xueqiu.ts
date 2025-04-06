import { getSymbolInfoByCode } from '@arbitrage-toolbox/shared';
const initModals = () => {
  document.body.classList.add('content-ui-body-login-hide');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('[扩展] DOMContentLoaded 已触发');
    //   // 在此执行操作：修改 DOM、绑定事件等
    setTimeout(() => {
      const modalParent = document.querySelector('.modals');
      if (modalParent) {
        console.log('modalParent', modalParent);
        modalParent.classList.remove('js-shown');
        document.body.classList.remove('content-ui-body-login-hide');
        document.body.classList.remove('scroll-no');
      }
    }, 300);
  });
  console.log('init modals');
};

export const initXueqiu = () => {
  initModals();
  const url = window.location.href.replace(location.search, '');
  const urlRegex = /https:\/\/xueqiu.com\/S\/([\w]+)/i;
  console.log(urlRegex.test(url));
  const stockDetail = url.match(urlRegex);
  console.log('stockDetail', stockDetail);
  const labelClass = 'bg-[#e5f1fb] text-xs rounded-sm text-[#1369bf] inline-block px-[6px] leading-6 ml-1 ';
  if (stockDetail) {
    let symbol = stockDetail[1];
    let code = symbol.toUpperCase().replace(/^SH/, '').replace(/^SZ/, '');
    // const isChinaStock = location.pathname.includes('/S/')
    let stockCode = url.substring(url.lastIndexOf('/') + 1);
    const symbolInfo = getSymbolInfoByCode(code, true);
    console.log('symbolInfo', symbolInfo);

    const renderLabel = (label: string, url: string) => {
      return `<a href="${url}" target="_blank" class="${labelClass}"><span>${label}</span></a>`;
    };

    const chart_container = document.querySelector('.chart-container-box');
    if (chart_container) {
      const tonghuasun = 'https://basic.10jqka.com.cn/' + code;
      chart_container.insertAdjacentHTML('beforebegin', renderLabel('同花顺F10', tonghuasun));
      let dongfangcaifu = 'https://quote.eastmoney.com/' + code + '.html';
      if (symbolInfo.isUS) dongfangcaifu = 'https://quote.eastmoney.com/us/' + code + '.html';
      if (symbolInfo.isHK) dongfangcaifu = 'https://quote.eastmoney.com/hk/' + code + '.html';
      chart_container.insertAdjacentHTML('beforebegin', renderLabel('东方财富', dongfangcaifu));

      if (!symbolInfo.isUS && !symbolInfo.isHK) {
        //集思录、i问财、 看财报只有a股
        let jisilu = '';
        if (symbolInfo.isLOF) {
          jisilu = `https://www.jisilu.cn/data/lof/detail/${code}`;
        } else if (symbolInfo.isETF) {
          jisilu = `https://www.jisilu.cn/data/etf/detail/${code}`;
        } else {
          jisilu = `https://www.jisilu.cn/data/stock/${code}`;
        }
        chart_container.insertAdjacentHTML('beforebegin', renderLabel('集思录', jisilu));
        const iwencai = 'https://www.iwencai.com/unifiedwap/result?w=' + stockCode;
        chart_container.insertAdjacentHTML('beforebegin', renderLabel('i问财', iwencai));
        const kancaibao = 'https://pro.kancaibao.com/app/company_main/?stockcode=' + stockCode;
        chart_container.insertAdjacentHTML('beforebegin', renderLabel('看财报', kancaibao));
        const lixinger =
          'https://www.lixinger.com/analytics/company/detail/' +
          symbolInfo.prefix.toLocaleLowerCase() +
          '/' +
          stockCode +
          '/' +
          stockCode;
        chart_container.insertAdjacentHTML('beforebegin', renderLabel('理杏仁', lixinger));
      }
    }
  }
};
