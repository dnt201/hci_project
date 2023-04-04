import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from 'src/navigator';
import {colors} from '@common/styles';
import {View} from '@ant-design/react-native';

interface IFacebookModeProps
  extends NativeStackScreenProps<IRootStackParamList, 'LoginWithFacebook'> {}

const FacebookMode: React.FC<IFacebookModeProps> = ({navigation}) => {
  return <View></View>;
};

export default FacebookMode;
