import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {colors, responsive} from '@common/styles';
import {SvgProps} from 'react-native-svg';
import {
  Account,
  Activity,
  Coupon as Voucher,
  Home,
  AccountFill,
  ActivityFill,
  CouponFill as VoucherFill,
  HomeFill,
  Cart,
  CartFill,
} from '@icons';

interface IProps extends BottomTabBarProps {}

const MyTabBar: React.FC<IProps> = ({state, descriptors, navigation}) => {
  const mapIconBottomTab = {
    Home: Account,
    Cart: Activity,
    Order: Voucher,
    Wallet: Home,
    Profile: Cart,
  };

  const mapIconFillBottomTab = {
    Home: AccountFill,
    Cart: ActivityFill,
    Order: VoucherFill,
    Wallet: HomeFill,
    Profile: CartFill,
  };

  return (
    <View style={[styles.container]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel || options.title || route.name || 'Error';
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        console.log(route);
        const Icon: React.FC<SvgProps> = isFocused
          ? mapIconBottomTab.Cart
          : mapIconFillBottomTab.Cart;
        // ? mapIconFillBottomTab[route.name]
        // : mapIconBottomTab[route.name];
        // : mapIconBottomTab.Account;
        // : mapIconBottomTab[route.name];

        return (
          <TouchableOpacity
            style={[
              {
                paddingHorizontal: responsive(10),
                paddingVertical: responsive(8),
              },
              isFocused
                ? {
                    borderTopColor: colors.PRIMARY,
                    borderTopWidth: 2,
                  }
                : null,
            ]}
            key={`key_Bottom_tab_${route.name}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={{alignItems: 'center', justifyContent: 'flex-start'}}>
              <Icon />
              <Text>{label.toString()}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.WHITE,
    borderTopColor: colors.LINE,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default MyTabBar;
