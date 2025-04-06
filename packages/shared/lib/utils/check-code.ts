export function getSymbolInfoByCode(code: string, maybeEtf: boolean = false) {
  let symbol = code;
  let isKcb = false;
  let isHK = false;
  let isBjs = false;
  let isLOF = false;
  let isETF = false;
  let isUS = false;
  let prefix = '';
  if (/^\d{5}$/.test(code)) {
    prefix = 'HK';
    isHK = true;
  } else if (/^(6)\d{5}$/.test(code)) {
    prefix = 'SH';
    if (/^688\d{3}$/.test(code)) {
      isKcb = true;
    }
  } else if (/^(3|0|2)\d{5}$/.test(code)) {
    prefix = 'SZ';
  } else if (/^(4|8|9)\d{5}$/.test(code)) {
    prefix = 'BJ';
    isBjs = true;
  } else if (/^11\d{4}$/.test(code)) {
    // 沪市可转债
    prefix = 'SH';
  } else if (/^12\d{4}$/.test(code)) {
    // 深市可转债
    prefix = 'SZ';
  } else if (maybeEtf && /^1\d{5}$/.test(code)) {
    // 深市ETF、LOF
    prefix = 'SZ';
    if (/^16\d{4}$/.test(code)) {
      isLOF = true;
    } else {
      isETF = true;
    }
  } else if (maybeEtf && /^5\d{5}$/.test(code)) {
    // 沪市ETF、LOF
    prefix = 'SH';
    if (/^50\d{4}$/.test(code)) {
      isLOF = true;
    } else {
      isETF = true;
    }
  } else if (/^[a-zA-Z]+$/i.test(code)) {
    prefix = 'US';
    isUS = true;
  } else {
    console.log('code', code, '未知');
    throw new Error(`未知的 code: ${code}`);
  }
  return {
    symbol: `${prefix}${code}`,
    prefix: prefix,
    isKcb,
    isBjs,
    isHK,
    isLOF,
    isETF,
    isUS,
  };
}
