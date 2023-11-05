import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function SettingScreen() {
  return <View style={styles.mainContainer}></View>;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default SettingScreen;
