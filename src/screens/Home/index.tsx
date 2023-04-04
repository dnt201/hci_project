import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '@hooks/useRedux';
import {CompositeNavigationProp} from '@react-navigation/native';
import {IBottomParamList, IRootStackParamList} from '@navigator';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type INavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<IBottomParamList, 'Home'>,
  NativeStackNavigationProp<IRootStackParamList, 'ProductList', 'NotifyList'>
>;
interface IHomeScreenMode {
  navigation: INavigationProps;
}

const Home: React.FC<IHomeScreenMode> = ({navigation}) => {
  const {type} = useAppSelector(state => state.home);

  //   const navigateToProductList = (id, title) =>
  //     navigation.navigate('ProductList', {id, title});

  //   const navigateToProductDetail = id => {
  //     navigation.navigate('Store', id);
  //   };

  //   const navigateToNotify = () => {
  //     navigation.navigate('NotifyList');
  //   };

  //   const navigateToCoupon = () => {
  //     navigation.navigate('CouponList', {isFromHome: true});
  //   };

  //   const navigateToLocation = () => {
  //     navigation.navigate('Location');
  //   };
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
