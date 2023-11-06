import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import colors from '../config/colors';
import WeeklyCalendar from 'react-native-weekly-calendar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const events = [
  { start: '2023-11-6 08:00:00', duration: '00:45:00', note: 'Polski' },
  { start: '2023-11-6 09:00:00', duration: '00:45:00', note: 'Polski' },
  { start: '2023-11-6 10:00:00', duration: '00:45:00', note: 'Fizyka' },
  { start: '2023-11-6 11:00:00', duration: '00:45:00', note: 'Matematyka' },
  {
    start: '2023-11-6 12:00:00',
    duration: '00:45:00',
    note: 'Język Angielski',
  },
  { start: '2023-11-6 13:00:00', duration: '00:45:00', note: 'Matematyka' },
  { start: '2023-11-7 08:00:00', duration: '00:45:00', note: 'Fizyka' },
  {
    start: '2023-11-7 09:00:00',
    duration: '00:45:00',
    note: 'Język Angielski',
  },
  { start: '2023-11-7 10:00:00', duration: '00:45:00', note: 'Matematyka' },
  { start: '2023-11-7 11:00:00', duration: '00:45:00', note: 'Polski' },
  { start: '2023-11-7 12:00:00', duration: '00:45:00', note: 'Polski' },

  { start: '2023-11-8 09:00:00', duration: '00:45:00', note: 'Fizyka' },
  { start: '2023-11-8 10:00:00', duration: '00:45:00', note: 'Fizyka' },
  { start: '2023-11-8 11:00:00', duration: '00:45:00', note: 'Matematyka' },
  { start: '2023-11-8 12:00:00', duration: '00:45:00', note: 'Matematyka' },
  { start: '2023-11-8 13:00:00', duration: '00:45:00', note: 'Polski' },

  { start: '2023-11-9 09:00:00', duration: '00:45:00', note: 'Polski' },
  { start: '2023-11-9 10:00:00', duration: '00:45:00', note: 'Fizyka' },
  { start: '2023-11-9 11:00:00', duration: '00:45:00', note: 'Matematyka' },
  { start: '2023-11-9 12:00:00', duration: '00:45:00', note: 'Matematyka' },
  {
    start: '2023-11-9 13:00:00',
    duration: '00:45:00',
    note: 'Język Angielski',
  },

  {
    start: '2023-11-10 08:00:00',
    duration: '00:45:00',
    note: 'Język Angielski',
  },
  {
    start: '2023-11-10 010:00:00',
    duration: '00:45:00',
    note: 'Język Angielski',
  },
  { start: '2023-11-10 10:00:00', duration: '00:45:00', note: 'Fizyka' },
  { start: '2023-11-10 11:00:00', duration: '00:45:00', note: 'Matematyka' },
  { start: '2023-11-10 12:00:00', duration: '00:45:00', note: 'Chemia' },
];
function Poniedziałek() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.subjectText}>Polski:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>klasa 4 zakres podstawowy</Text>
        <Text style={styles.bookText}>Potop</Text>
      </View>
      <Text style={styles.subjectText}>Fizyka:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Fizyka zakres rozszerzony</Text>
        <Text style={styles.bookText}>
          Zbiór zadań fizyka zakres rozszerzony
        </Text>
      </View>
      <Text style={styles.subjectText}>Matematyka:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Matematyka zakres rozszerzony</Text>
        <Text style={styles.bookText}>
          Zbiór zadań Matematyka zakres rozszerzony
        </Text>
      </View>
      <Text style={styles.subjectText}>Język Angielski:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}> Język Angielski zakres podstawowy</Text>
      </View>
    </View>
  );
}
function Wtorek() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.subjectText}>Polski:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>klasa 4 zakres podstawowy</Text>
        <Text style={styles.bookText}>Potop</Text>
      </View>
      <Text style={styles.subjectText}>Fizyka:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Fizyka zakres rozszerzony</Text>
        <Text style={styles.bookText}>
          Zbiór zadań fizyka zakres rozszerzony
        </Text>
      </View>
      <Text style={styles.subjectText}>Matematyka:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Matematyka zakres rozszerzony</Text>
        <Text style={styles.bookText}>
          Zbiór zadań Matematyka zakres rozszerzony
        </Text>
      </View>
      <Text style={styles.subjectText}>Język Angielski:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}> Język Angielski zakres podstawowy</Text>
      </View>
    </View>
  );
}
function Środa() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.subjectText}>Polski:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>klasa 4 zakres podstawowy</Text>
        <Text style={styles.bookText}>Potop</Text>
      </View>
      <Text style={styles.subjectText}>Fizyka:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Fizyka zakres rozszerzony</Text>
        <Text style={styles.bookText}>
          Zbiór zadań fizyka zakres rozszerzony
        </Text>
      </View>
      <Text style={styles.subjectText}>Matematyka:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Matematyka zakres rozszerzony</Text>
        <Text style={styles.bookText}>
          Zbiór zadań Matematyka zakres rozszerzony
        </Text>
      </View>
    </View>
  );
}
function Czwartek() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.subjectText}>Polski:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>klasa 4 zakres podstawowy</Text>
        <Text style={styles.bookText}>Potop</Text>
      </View>
      <Text style={styles.subjectText}>Fizyka:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Fizyka zakres rozszerzony</Text>
        <Text style={styles.bookText}>
          Zbiór zadań fizyka zakres rozszerzony
        </Text>
      </View>
      <Text style={styles.subjectText}>Matematyka:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Matematyka zakres rozszerzony</Text>
        <Text style={styles.bookText}>
          Zbiór zadań Matematyka zakres rozszerzony
        </Text>
      </View>
      <Text style={styles.subjectText}>Język Angielski:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}> Język Angielski zakres podstawowy</Text>
      </View>
    </View>
  );
}
function Piątek() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.subjectText}>Fizyka:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Fizyka zakres rozszerzony</Text>
        <Text style={styles.bookText}>
          Zbiór zadań fizyka zakres rozszerzony
        </Text>
      </View>
      <Text style={styles.subjectText}>Matematyka:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Matematyka zakres rozszerzony</Text>
        <Text style={styles.bookText}>
          Zbiór zadań Matematyka zakres rozszerzony
        </Text>
      </View>
      <Text style={styles.subjectText}>Język Angielski:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}> Język Angielski zakres podstawowy</Text>
      </View>
      <Text style={styles.subjectText}>Chemia:</Text>
      <View style={{ padding: 5 }}>
        <Text style={styles.bookText}>Chemia zakres podstawowy</Text>
      </View>
    </View>
  );
}
function Calendar({ navigation }) {
  const [buttonText, setButtonText] = useState('');
  function handleClick(text) {
    setButtonText(text);
  }

  return (
    <View style={styles.container}>
      <Button
        title={'Spakuj się na: ' + buttonText}
        color={colors.dark}
        onPress={() => navigation.navigate(buttonText)}
      />
      <WeeklyCalendar
        events={events}
        startWeekday={7}
        selected="2023-11-06"
        locale="pl"
        weekdayFormat="ddd"
        themeColor={colors.dark}
        style={styles.calendar}
        dayLabelStyle={styles.dayLabel}
        titleStyle={styles.calendarTitle}
        onDayPress={weekday => {
          handleClick(weekday.format('dddd'));
        }}
      />
    </View>
  );
}
function CalendarScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="poniedziałek"
          component={Poniedziałek}
          options={{
            headerTitleStyle: {
              color: colors.background,
            },
            headerStyle: { backgroundColor: colors.dark },
          }}
        />
        <Stack.Screen
          name="wtorek"
          component={Wtorek}
          options={{
            headerTitleStyle: {
              color: colors.background,
            },
            headerStyle: { backgroundColor: colors.dark },
          }}
        />
        <Stack.Screen
          name="środa"
          component={Środa}
          options={{
            headerTitleStyle: {
              color: colors.background,
            },
            headerStyle: { backgroundColor: colors.dark },
          }}
        />
        <Stack.Screen
          name="czwartek"
          component={Czwartek}
          options={{
            headerTitleStyle: {
              color: colors.background,
            },
            headerStyle: { backgroundColor: colors.dark },
          }}
        />
        <Stack.Screen
          name="piątek"
          component={Piątek}
          options={{
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
  booksContainer: {
    alignSelf: 'flex-end',
    height: 100,
    backgroundColor: 'red',
  },
  bookText: {
    padding: 2,
    fontSize: 20,
  },
  calendar: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  calendarTitle: {
    color: colors.dark,
  },
  dayLabel: {
    color: colors.dark,
  },
  pageContainer: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  subjectText: {
    fontSize: 25,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default CalendarScreen;
