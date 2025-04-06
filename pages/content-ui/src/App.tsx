import { useEffect } from 'react';
import { ToggleButton } from '@arbitrage-toolbox/ui';
import { exampleThemeStorage, fundMapStorage } from '@arbitrage-toolbox/storage';
import { t } from '@arbitrage-toolbox/i18n';

let rerenderTimer = null as unknown as NodeJS.Timeout;

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
          const selectTdNode = tdNodes[4];
          const selectTdNodefirstChild = selectTdNode.firstChild as HTMLSpanElement;
          const selectTdNodeChildredCount = selectTdNode.childElementCount;
          if (selectTdNodefirstChild && fundMapItem) {
            // selectTdNodeLastChild.classList.add('flex');
            // selectTdNodeLastChild.style.display = 'flex';
            // selectTdNodeLastChild.style.gap = '16px';
            selectTdNodefirstChild.style.width = 'auto';
            const createSpan = document.createElement('span');
            const premiumRate = Math.round(fundMapItem['premium_rate'] * 100) / 100;
            if (selectTdNodeChildredCount > 1) {
              selectTdNodefirstChild.innerHTML = `溢价：${premiumRate}%`;
            } else {
              createSpan.className = 'inline';
              createSpan.innerHTML = `溢价：${premiumRate}%`;
              createSpan.style.width = 'auto';
              createSpan.style.color = premiumRate > 0 ? '#ee2500' : premiumRate === 0 ? '#000' : '#093';
              createSpan.style.marginRight = '12px';
              selectTdNodefirstChild.insertAdjacentElement('beforebegin', createSpan);
            }
          } else {
            if (fundMapItem) {
              console.log('selectTdNodefirstChild not found', selectTdNodefirstChild);
            } else {
              console.log('fundMapItem not found', symbolText);
            }
          }
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
