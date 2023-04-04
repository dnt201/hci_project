import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {width, responsive, typos, colors, height} from '@common/styles';
import {IWelcome} from '@screens/Welcome/type';

interface Props extends IWelcome {}

export const WelcomeItem = ({title, subTitle, Svg}: Props) => {
  return (
    <View style={styles.containerItem}>
      <Svg />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    width: width,
    flex: 1,
    marginTop: height / 6,
    alignItems: 'center',
  },
  title: {
    color: colors.BLACK,
    width: 260,
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 40,
  },
  subTitle: {
    color: colors.BLACK,
    width: 260,
    textAlign: 'center',
  },
});
