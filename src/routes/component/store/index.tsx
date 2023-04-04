import React from 'react';
import {RootStack} from '@navigator';
import MainStore from '@screens/Store/MainScreen';
import DetailStore from '@screens/Store/DetailScreen';

export const renderStackStore = () => {
  return (
    <>
      <RootStack.Screen name="Store" component={MainStore} />
      <RootStack.Screen name="StoreDetail" component={DetailStore} />
    </>
  );
};
