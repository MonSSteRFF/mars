import {makeAutoObservable} from 'mobx';
import React, {createContext, useContext} from 'react';

import PhotoStorage from './PhotoStorage.ts';

class Storage {
  photoStorage: PhotoStorage;

  constructor() {
    makeAutoObservable(this);

    this.photoStorage = new PhotoStorage();
  }
}

const storage = new Storage();

const StorageContext = createContext<Storage>(storage);

export const StorageContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <StorageContext.Provider value={storage}>{children}</StorageContext.Provider>;
};

export function useStorage<R>(selector: (value: Storage) => R) {
  const store = useContext(StorageContext);

  if (store === undefined || store === null) {
    throw new Error('Can not use `useStorage` outside of the `StorageContextProvider`');
  }

  return selector(store);
}
