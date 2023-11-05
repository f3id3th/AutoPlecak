import * as React from 'react';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SubjectView({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      {/* Polski */}
      <TouchableOpacity
        style={styles.subjectContainer}
        onPress={() => navigation.navigate('Polski')}
      >
        <View>
          <View>
            <Text style={styles.touchableText}>Polski</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* Matematyka */}
      <TouchableOpacity
        style={styles.subjectContainer}
        onPress={() => navigation.navigate('Matemtyka')}
      >
        <View>
          <View>
            <Text style={styles.touchableText}>Matematyka</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* JAngielski */}
      <TouchableOpacity
        style={styles.subjectContainer}
        onPress={() => navigation.navigate('Jezyk Angielski')}
      >
        <View>
          <View>
            <Text style={styles.touchableText}>Język Angielski</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Chemia */}
      <TouchableOpacity
        style={styles.subjectContainer}
        onPress={() => navigation.navigate('Chemia')}
      >
        <View>
          <View>
            <Text style={styles.touchableText}>Chemia</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Fizyka */}
      <TouchableOpacity
        style={styles.subjectContainer}
        onPress={() => navigation.navigate('Fizyka')}
      >
        <View>
          <View>
            <Text style={styles.touchableText}>Fizyka</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Add */}
      <TouchableOpacity
        style={styles.addContainer}
        onPress={() => navigation.navigate('addSubject')}
      >
        <View>
          <View>
            <Text style={styles.addText}>+ Dodaj Przedmiot</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Fizyka({ navigation }) {
  const [isChecked, setChecked] = useState(true);
  return (
    <View style={styles.pageMain}>
      <View style={styles.pageContainer}>
        <Text style={styles.pageText}>Zeszyt</Text>
        <Checkbox
          color={isChecked ? colors.dark : colors.background}
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
      </View>

      <View style={styles.pageContainer}>
        <Text style={styles.pageText}>Podręcznik</Text>

        <TouchableOpacity
          style={styles.pageTouchable}
          onPress={() => navigation.navigate('Fizyka')}
        >
          <View>
            <View>
              <Text numberOfLines={1} style={styles.pageTouchableText}>
                Fizyka zakres rozszerzony
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name={'camera'}
            color={colors.background}
            size={40}
            style={{ paddingHorizontal: 4 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.pageContainer}>
        <Text style={styles.pageText}>Ćwiczenia</Text>

        <TouchableOpacity
          style={styles.pageTouchable}
          onPress={() => navigation.navigate('Fizyka')}
        >
          <View>
            <View>
              <Text numberOfLines={1} style={styles.pageTouchableText}>
                Zbiór zadań fizyka zakres rozszerzony
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name={'camera'}
            color={colors.background}
            size={40}
            style={{ paddingHorizontal: 4 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', width: '100%' }}>
        <View style={styles.addContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('addBook')}>
            <View>
              <View>
                <Text style={styles.addText}>+ Dodaj Książkę</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function SubjectScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="SubjectView"
          component={SubjectView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fizyka"
          component={Fizyka}
          options={{
            headerRight: props => (
              <TouchableOpacity style={styles.saveContainer}>
                <View>
                  <View>
                    <Text style={styles.saveText}>Zapisz</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ),
            headerTitleStyle: {
              color: colors.background,
            },
            headerStyle: { backgroundColor: colors.dark },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
  checkbox: {
    alignSelf: 'center',
    margin: 8,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  saveContainer: {
    alignItems: 'flex-end',
    borderRadius: 55,
    backgroundColor: colors.primary,
    padding: 10,
  },
  saveText: {
    fontSize: 20,
    color: colors.background,
    textTransform: 'uppercase',
  },
  subjectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: colors.dark,
    paddingVertical: 20,
    width: '95%',
  },
  pageContainer: {
    flexDirection: 'row',
  },
  pageMain: {
    justifyContent: 'space-evenly',
    backgroundColor: colors.primary,
    flex: 1,
  },
  pageText: {
    fontSize: 25,
    padding: 6,
  },
  pageTouchable: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: colors.dark,
    paddingHorizontal: 2,
  },
  pageTouchableText: {
    fontSize: 16,
  },
  touchableText: {
    fontSize: 25,
    textTransform: 'uppercase',
  },
});

export default SubjectScreen;
