import { useStorage, withErrorBoundary, withSuspense } from '@arbitrage-toolbox/shared';
import { exampleThemeStorage } from '@arbitrage-toolbox/storage';
import { t } from '@arbitrage-toolbox/i18n';
import { Copyright } from 'lucide-react';

import { ToggleButton } from '@arbitrage-toolbox/ui';

const notificationOptions = {
  type: 'basic',
  iconUrl: chrome.runtime.getURL('icon-34.png'),
  title: 'Injecting content script error',
  message: 'You cannot inject script here!',
} as const;

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);
  const isLight = theme === 'light';
  const logo = 'popup/logo.png';
  const goGithubSite = () => chrome.tabs.create({ url: 'https://github.com/jackluson' });

  const injectContentScript = async () => {
    const [tab] = await chrome.tabs.query({ currentWindow: true, active: true });

    if (tab.url!.startsWith('about:') || tab.url!.startsWith('chrome:')) {
      chrome.notifications.create('inject-error', notificationOptions);
    }

    await chrome.scripting
      .executeScript({
        target: { tabId: tab.id! },
        files: ['/content-runtime/index.iife.js'],
      })
      .catch(err => {
        // Handling errors related to other paths
        if (err.message.includes('Cannot access a chrome:// URL')) {
          chrome.notifications.create('inject-error', notificationOptions);
        }
      });
  };
  if (logo) {
    return (
      <div className="App flex flex-col items-center min-w-[360px] justify-center bg-background ">
        <header className=" p-2 flex w-full justify-between items-center bg-card/50 shadow-md border-b border-border ">
          <div className="flex items-center">
            <img
              src={chrome.runtime.getURL(logo)}
              className="h-10 w-10 overflow-hidden object-contain rounded-full "
              alt="logo"
            />
            <h2 className="text-base text-foreground ml-2 font-bold">套利工具箱</h2>
          </div>
          {/* <Button
            variant="ghost"
            onClick={() => {
              chrome.runtime.openOptionsPage();
            }}
            className="cursor-pointer text-sm mr-[-8px] ">
            <Settings size={20} />
          </Button> */}
        </header>
        <main className="p-4 min-h-[200px] ">
          <div className="flex justify-start items-center">
            <span className="text-base text-foreground/80 font-bold mr-2">入口:</span>
            <a
              className="hover:underline text-[#06c] text-base"
              href="https://xueqiu.com/hq/detail?name=LOF&market=CN&first_name=4&second_name=8&parentType=1&type=19&source=fund"
              target="_blank"
              rel="noopener noreferrer">
              LOF{' '}
            </a>
            <span className="text-sm mx-2 text-gray-300">|</span>
            <a
              className="hover:underline text-[#06c] text-base"
              href="https://xueqiu.com/hq/detail?name=ETF&market=CN&first_name=4&second_name=7&parentType=1&type=18&source=fund"
              target="_blank"
              rel="noopener noreferrer">
              ETF{' '}
            </a>
          </div>
        </main>
        <footer className="text-center justify-center p-4 w-full flex items-center border-t border-border/90 bg-[#f0f8ff]">
          <span>
            <Copyright size={16} />
          </span>
          <a
            className="items-center mx-1 text-sm underline "
            href="https://github.com/jackluson"
            target="_blank"
            rel="noopener noreferrer">
            jackluson
          </a>
          <a href="https://github.com/jackluson" target="_blank" rel="noopener noreferrer">
            <img
              src={chrome.runtime.getURL('popup/github.svg')}
              className="h-4 w-4 overflow-hidden object-contain "
              alt="logo"
            />
          </a>
        </footer>
      </div>
    );
  }
  return (
    <div className={`App ${isLight ? 'bg-slate-50' : 'bg-gray-800'}`}>
      <header className={`App-header ${isLight ? 'text-gray-900' : 'text-gray-100'}`}>
        <button onClick={goGithubSite}>
          <img src={chrome.runtime.getURL(logo)} className="App-logo" alt="logo" />
        </button>
        <p>
          Edit <code>pages/popup/src/Popup.tsx</code>
        </p>
        <button
          className={
            'font-bold mt-4 py-1 px-4 rounded shadow hover:scale-105 ' +
            (isLight ? 'bg-blue-200 text-black' : 'bg-gray-700 text-white')
          }
          onClick={injectContentScript}>
          Click to inject Content Script
        </button>
        <ToggleButton>{t('toggleTheme')}</ToggleButton>
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
