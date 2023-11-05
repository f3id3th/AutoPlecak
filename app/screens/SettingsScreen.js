import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

export default function SettingScreen({ navigation }) {
  return <View style={styles.mainContainer}></View>;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
