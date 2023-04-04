import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, typos, height, responsive} from '@common/styles';
import {Apple, Facebook, Google, Logo, SmartPhone} from '@icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from 'src/navigator';

interface ILoginScreenProps
  extends NativeStackScreenProps<IRootStackParamList, 'Login'> {}

const LoginScreen: React.FC<ILoginScreenProps> = navigation => {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoTitle}>Đặt món ngay với</Text>
        <Logo />
      </View>
      <Text style={{marginBottom: 16}}>Đăng nhập ngay!</Text>

      {/*Login with phone number*/}
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigation.navigate('LoginWithPhoneNumber')}>
        <SmartPhone />
        <Text>Tiếp tục với số điện thoại</Text>
      </TouchableOpacity>

      {/*Login with google*/}
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigation.navigate('LoginWithGoogle')}>
        <Google />
        <Text>Đăng nhập với Google</Text>
      </TouchableOpacity>

      {/*Login with facebook/*/}
      <Pressable
        style={styles.btnContainer}
        onPress={() => navigation.navigation.navigate('LoginWithFacebook')}>
        <Facebook />
        <Text>Đăng nhập với Facebook</Text>
      </Pressable>

      {/*Login with apple id*/}
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigation.navigate('LoginWithAppleId')}>
        <Apple />
        <Text>Đăng nhập với Apple ID</Text>
      </TouchableOpacity>

      <Text>
        Bằng việc đăng nhập, bạn đồng ý với{' '}
        <Text style={[{color: colors.PRIMARY}]}>Điều khoản sử dụng </Text> và{' '}
        <Text style={{color: colors.PRIMARY}}>Chính sách bảo mật</Text> của
        chúng tôi
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 16,
    paddingTop: height / 8,
  },
  logoContainer: {
    marginBottom: height / 12,
  },
  logoTitle: {
    paddingBottom: 12,
  },
  btnContainer: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.LINE,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  btnText: {
    ...typos.xs.medium,
    fontWeight: '500',
    fontSize: 13,
    flex: 1,
    textAlign: 'center',
  },
  bottomText: {
    position: 'absolute',
    bottom: responsive(40),
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
