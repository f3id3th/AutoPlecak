import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SettingScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={{ width: '95%', paddingVertical: 20 }}>
        <TouchableOpacity style={styles.subjectContainer}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <Text style={styles.touchableText}>Przypomnienie</Text>
            <Text style={styles.touchableText}>19:30</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ width: '95%', paddingVertical: 20 }}>
        <TouchableOpacity style={styles.subjectContainer}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <Text style={styles.touchableText}>Przypomnienie II</Text>
            <Text style={styles.touchableText}>7:30</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.addContainer}
        onPress={() => navigation.navigate('addReminder')}
      >
        <View>
          <View>
            <Text style={styles.addText}>+ Dodaj Przypomnienie</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingVertical: 20,
    width: '70%',
  },
  addText: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'flex-start',
  },

  subjectContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: colors.dark,
    paddingVertical: 10,
    width: '95%',
  },
  touchableText: {
    paddingLeft: 10,
    fontSize: 25,
  },
});

export default SettingScreen;
