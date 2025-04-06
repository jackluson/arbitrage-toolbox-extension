import type { BaseStorage } from '../base/index.js';
import { createStorage, StorageEnum } from '../base/index.js';

type FundMap = Record<string, any>;

type FundMapStorage = BaseStorage<FundMap> & {
  // set: (key:string, value:any) => Promise<FundMap>;
  // get: (key:string) => Promise<FundMap>;
};

const storage = createStorage<FundMap>(
  'fund-map-storage-key',
  {},
  {
    storageEnum: StorageEnum.Local,
    liveUpdate: true,
  },
);

export const fundMapStorage: FundMapStorage = {
  ...storage,
  // set: async (key:string, value:any) => {
  //   const map = new Map<string, any>();
  //   return await storage.set((currentMap) => {
  //     map.set(key, value);
  //     return map;
  //   });
  // },
  // get: async (key:string) => {
  //   const map = new Map<string, any>();
  //   await storage.get().then((currentMap) => {
  //     currentMap.forEach((value, key) => {
  //       map.set(key, value);
  //     });
  //   });
  //   return map;
  // },
};
