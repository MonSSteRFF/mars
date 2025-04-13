import React, {useEffect} from 'react';

import Router from './router/Router.tsx';
import {StorageContextProvider} from './storage/Storage.tsx';

const App = () => {
  useEffect(() => {
    console.log('app stated');

    return () => {
      console.log('app closed');
    };
  }, []);

  return (
    <StorageContextProvider>
      <Router />
    </StorageContextProvider>
  );
};

export default App;
