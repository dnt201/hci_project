import {RootStack} from '@navigator';
import React from 'react';
import WelcomeScreen from '@screens/Welcome';
import {useAppSelector} from '@hooks/useRedux';
import {renderAuthStack} from '@routes/component/auth';
import {renderMainStack} from '@routes/component/main';
export const RootApp = () => {
  const {isDoneFirstTime, user} = useAppSelector(state => state.auth);

  const renderAllScreen = () => {
    if (!isDoneFirstTime) {
      return <RootStack />;
    }
    if (user == null) {
      return renderAuthStack();
    }

    return renderMainStack();
  };

  return (
    <RootStack.Navigator
      screenOptions={props => {
        return {
          headerShown: false,
        };
      }}>
      {renderAllScreen()}
    </RootStack.Navigator>
  );
};
