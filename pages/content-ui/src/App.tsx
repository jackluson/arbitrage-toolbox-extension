import { useEffect } from 'react';
import { ToggleButton } from '@arbitrage-toolbox/ui';
import { exampleThemeStorage, fundMapStorage } from '@arbitrage-toolbox/storage';
import { t } from '@arbitrage-toolbox/i18n';

let rerenderTimer = null as unknown as NodeJS.Timeout;

const upsertAdjacentElement = (
  selectTdNodefirstChild: HTMLSpanElement,
  selectTdNodeChildredCount: number,
  fundMapItem: Record<string, any>,
  prop: string,
  label: string,
  unit: string,
  unitPer = 1,
) => {
  if (selectTdNodefirstChild && fundMapItem) {
    selectTdNodefirstChild.style.width = 'auto';
    const createSpan = document.createElement('span');
    const propValue = Math.round((fundMapItem[prop] * 100) / unitPer) / 100;
    if (selectTdNodeChildredCount > 1) {
      selectTdNodefirstChild.innerHTML = `${label}:${propValue}${unit}`;
    } else {
      createSpan.className = 'inline';
      createSpan.innerHTML = `${label}:${propValue}${unit}`;
      createSpan.style.width = 'auto';
      if (unit === '%') {
        createSpan.style.color = propValue > 0 ? '#ee2500' : propValue === 0 ? '#000' : '#093';
      } else {
        createSpan.style.color = '#000';
      }
      createSpan.style.marginRight = '12px';
      selectTdNodefirstChild.insertAdjacentElement('beforebegin', createSpan);
    }
  } else {
    if (fundMapItem) {
      console.log('selectTdNodefirstChild not found', selectTdNodefirstChild);
    } else {
      console.log('fundMapItem not found');
    }
  }
};

export default function App() {
  // const fundMap = useStorage(fundMapStorage);
  // console.log("fundMap", fundMap);

  const rerenderTbody = async () => {
    const fundMap = await fundMapStorage.get();
    const tbodyNodes = document.querySelectorAll('tbody');
    for (const node of Array.from(tbodyNodes)) {
      if (node.nodeName === 'TBODY') {
        const trNodes = node.querySelectorAll('tr');
        for (const trNode of Array.from(trNodes)) {
          const tdNodes = trNode.querySelectorAll('td');
          const symbolNode = tdNodes[0];
          const symbolText = symbolNode.textContent;
          const fundMapItem = fundMap[symbolText!];
          let selectTdNode = tdNodes[4];
          const selectTdNodefirstChild = selectTdNode.firstChild as HTMLSpanElement;
          upsertAdjacentElement(
            selectTdNodefirstChild,
            selectTdNode.childElementCount,
            fundMapItem,
            'premium_rate',
            '溢价率',
            '%',
          );
          selectTdNode = tdNodes[3];
          upsertAdjacentElement(
            selectTdNode.firstChild as HTMLSpanElement,
            selectTdNode.childElementCount,
            fundMapItem,
            'market_capital',
            '市值',
            '亿元',
            100000000,
          );
          selectTdNode = tdNodes[5];
          upsertAdjacentElement(
            selectTdNode.firstChild as HTMLSpanElement,
            selectTdNode.childElementCount,
            fundMapItem,
            'amount',
            '成交额',
            '万元',
            10000,
          );
          selectTdNode = tdNodes[2];
          upsertAdjacentElement(
            selectTdNode.firstChild as HTMLSpanElement,
            selectTdNode.childElementCount,
            fundMapItem,
            'current_year_percent',
            '年涨幅',
            '%',
            1,
          );

          const marketCapital = Math.round((fundMapItem['market_capital'] / 10 ** 8) * 100) / 100;
        }
      }
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(async mutationRecordList => {
      if (mutationRecordList.length === 0) return;
      let index = 0;
      let rerender = false;
      for (const mutation of mutationRecordList) {
        if (mutation.type === 'childList' && location.pathname.includes('hq/detail')) {
          // console.log('DOM changed:', mutation);
          let isAddNode = mutation.target.nodeName === 'TBODY' && mutation.addedNodes.length > 0;
          const updateTrNode = mutation.target.nodeName === 'TR' && mutation.addedNodes.length === 0;
          if (isAddNode || updateTrNode) {
            index++;
            // console.log("mutation", mutation, index);
            if (isAddNode || updateTrNode) {
              // const addedNode = mutation.addedNodes[0];
              // console.log("addedNode", addedNode.textContent);
              rerender = true;
            }
          }
        }
      }
      if (rerender) {
        rerenderTimer = setTimeout(async () => {
          rerenderTimer && clearTimeout(rerenderTimer);
          rerenderTbody();
        }, 30);
        rerender = false;
        // window.dispatchEvent(event);
      }
    });
    observer.observe(document, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false,
    });
    fundMapStorage.subscribe(async () => {
      if (rerenderTimer) {
        clearTimeout(rerenderTimer);
        rerenderTbody();
      }
    });
  }, []);

  return null;
}
