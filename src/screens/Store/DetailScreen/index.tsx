import React, {ReactNode, useState} from 'react';

//hooks
import {View, useWindowDimensions} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';

interface IStoreDetailScreenProps
  extends NativeStackScreenProps<IRootStackParamList, 'StoreDetail'> {}

interface ITab {
  key: string;
  title: string;
  Component: ReactNode;
}

const DetailScreen: React.FC<IStoreDetailScreenProps> = ({navigation}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return <View>Detail store</View>;
};

export default DetailScreen;
