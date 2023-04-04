import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors} from '@common/styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from 'src/navigator';
import {View} from '@ant-design/react-native';

interface IValidateOTPProps
  extends NativeStackScreenProps<IRootStackParamList, 'ValidateOTP'> {}

const ValidateOTP: React.FC<IValidateOTPProps> = ({navigation}) => {
  const [otpCode, setOTPCode] = useState('');
  const maximumCodeLength = 6;
  return <View style={{backgroundColor: colors.WHITE}}>Validate OTP</View>;
};

export default ValidateOTP;

const styles = StyleSheet.create({});
