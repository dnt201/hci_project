import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type IRootStackParamList = {
  Welcome: undefined;

  /*Auth screen*/
  Login: undefined;
  LoginWithPhoneNumber: undefined;
  LoginWithGoogle: undefined;
  LoginWithFacebook: undefined;
  LoginWithAppleId: undefined;
  Register: undefined;
  //validateOTP
  ValidateOTP: undefined;

  /*Account screen*/
  Main: undefined;
  Payment: undefined;
  Help: undefined;
  EditProfile: undefined;
  SelectLanguage: undefined;
  Location: undefined;
  GoogleMap: undefined;
  SecurityPolicy: undefined;
  TermsOfService: undefined;
  AddBankAccount: undefined;
  AddEWallet: undefined;

  Store: undefined;
  StoreDetail: undefined;
  Home: undefined;

  //Notify
  NotifyList: undefined;
  NotifyDetail: {id: string};

  //Coupon
  CouponList: {isFromHome?: boolean};
  CouponDetail: {id: string};

  //Product
  ProductList: {id: string; title: string};
  ProductDetail: {id: string};
  ProductFilter: undefined;

  //Order
  Order: undefined;
  OrderDetail: {id: string};
  Booking: {id: string};

  //Cart
  Cart: undefined;
};

export const RootStack = createNativeStackNavigator<IRootStackParamList>();
