import React from 'react';
import {RootStack} from '@navigator';
import LoginScreen from '@screens/Auth/Login';
import LoginWithPhoneNumber from '@screens/Auth/Login/Phone';
import LoginWithGoogle from '@screens/Auth/Login/Google';
import LoginWithFacebook from '@screens/Auth/Login/Facebook';
import LoginWithAppleId from '@screens/Auth/Login/Apple';

export const renderAuthStack = () => {
  return (
    <>
      {/* Login */}
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen
        name="LoginWithPhoneNumber"
        component={LoginWithPhoneNumber}
      />
      <RootStack.Screen name="LoginWithGoogle" component={LoginWithGoogle} />
      <RootStack.Screen
        name="LoginWithFacebook"
        component={LoginWithFacebook}
      />
      <RootStack.Screen name="LoginWithAppleId" component={LoginWithAppleId} />

      {/* Register */}
      {/* <RootStack.Screen name="Register" component={RegisterFormScreen} />
      <RootStack.Screen
        name="RegisterVerifyOTP"
        component={RegisterVerifyOTPScreen}
      /> */}

      {/* Forgot password */}
      {/* <RootStack.Screen
        name="ForgotPasswordInputPhoneNumber"
        component={ForgotPasswordScreen}
      />
      <RootStack.Screen
        name="ForgotPasswordVerifyOTP"
        component={ForgotPasswordVerifyOTPScreen}
      />
      <RootStack.Screen
        name="ForgotPasswordConfirmPassword"
        component={ForgotPasswordConfirmPasswordScreen}
      /> */}
    </>
  );
};
