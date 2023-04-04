import {
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';

//locals

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {View} from '@ant-design/react-native';

interface IStoreProps {}
const Store: React.FC<IStoreProps> = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (isLoading === true)
      setTimeout(() => {
        setLoading(false);
      }, 3000);
  }, []);
  return isLoading ? (
    <View>
      <Text>Skeleton</Text>
    </View>
  ) : (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar hidden={true} />
      <Text>Main screen</Text>
      {/* Shop information */}
    </ScrollView>
  );
};

export default Store;

const styles = StyleSheet.create({});
