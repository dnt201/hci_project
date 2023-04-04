import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Logo, Line} from '@icons';
import {colors, height, responsive, typos} from '@common/styles';

//formik

//components

//api
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IBottomParamList, IRootStackParamList} from 'src/navigator';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

//redux
import {useAppDispatch} from '@hooks/useRedux';
import {setUser} from '@redux/slices/auth';
import {Button} from '@ant-design/react-native';

type INavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<IRootStackParamList, 'LoginWithPhoneNumber'>,
  BottomTabNavigationProp<IBottomParamList, 'Home'>
>;

interface IPhoneNumberModeProps {
  navigation: INavigationProps;
}

interface IFormValue {
  phoneNumber: string;
}

// const validationSchema = yup.object().shape<{[k in keyof IFormValue]: any}>({
//   phoneNumber: yup.string().required('Vui lòng nhập số điện thoại của bạn'),
// });

const PhoneNumberMode: React.FC<IPhoneNumberModeProps> = ({navigation}) => {
  // const [initialValue, setInitialValue] = useState<IFormValue>({
  //   phoneNumber: '',
  // });
  // const [checkPhoneNumber] = useIsExistingPhoneNumber(
  //   fragmentIsExistedPhoneNumber,
  // );

  //redux
  const dispatch = useAppDispatch();

  const handleSubmit = (values: IFormValue) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Logo />
      {/* <Formik
        validationSchema={validationSchema}
        initialValues={initialValue}
        onSubmit={handleSubmit}>
        <Box mt="10">
          <InputPhone
            label="Số điện thoại"
            name="phoneNumber"
            placeHolder="Nhập số điện thoại của bạn"
          />
        </Box>
      </Formik>
      <Button
        variant="secondary"
        mt="5"
        onPress={() => dispatch(setUser('Hi'))}>
        Đăng nhập
      </Button> */}
      <Button onPress={() => dispatch(setUser('Hi'))}>Đăng nhập</Button>
    </View>
  );
};

export default PhoneNumberMode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingTop: height / 12,
    paddingHorizontal: responsive(16),
  },
  inputContainer: {
    marginTop: height / 12,
    borderWidth: 1,
    borderRadius: 8,
    height: responsive(40),
    borderColor: colors.BLACK,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
  },
  btnLogin: {
    height: responsive(40),
    backgroundColor: colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: responsive(10),
  },
});
