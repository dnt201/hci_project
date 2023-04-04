import React from 'react';
import {RootStack} from '@navigator';
import BottomTab from '../bottomTab';

import {renderStackProduct} from '../product';
import {renderStackNotify} from '../notify';
import {renderStackCoupon} from '../coupon';
import {renderStackAccount} from '../account';
import {renderStackOrder} from '../order';
import {renderStackStore} from '../store';

export const renderMainStack = () => {
  return (
    <>
      {renderStackOrder()}
      <RootStack.Screen name="Main" component={BottomTab} />
      {renderStackProduct()}
      {renderStackNotify()}
      {renderStackCoupon()}
      {renderStackAccount()}
      {renderStackStore()}
    </>
  );
};
