import React from 'react';
import {RootBottomTab} from '@navigator';
import MyTabBar from '@components/MyBottomTabBar';
import {Home} from '@icons';
// import HomeScreen from '@screens/Home';
// import ActivityScreen from '@screens/Activity';
// import VoucherScreen from '@screens/Voucher';
// import AccountScreen from '@screens/Account/MainScreen';
// import CartScreen from '@screens/Cart/MainScreen';
// import MyTabBar from '@components/MyBottomTabBar';

const BottomTab = () => {
  return (
    <RootBottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <RootBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <RootBottomTab.Screen
        name="Cart"
        component={Home}
        options={{
          title: 'Cart',
        }}
      />
      <RootBottomTab.Screen
        name="Orders"
        component={Home}
        options={{
          title: 'Orders',
        }}
      />
      <RootBottomTab.Screen
        name="Wallet"
        component={Home}
        options={{
          title: 'Wallet',
        }}
      />

      <RootBottomTab.Screen
        name="Profile"
        component={Home}
        options={{
          title: 'Profile',
        }}
      />
    </RootBottomTab.Navigator>
  );
};

export default BottomTab;
