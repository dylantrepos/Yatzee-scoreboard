import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './views'
import Results from './views/Results/index'
import Game from './views/Game';
import AddResult from './views/AddResult';
import Score from './views/Score';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="AddResult" component={AddResult} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
