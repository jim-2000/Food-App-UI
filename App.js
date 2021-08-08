import React from 'react'
import { StyleSheet,StatusBar } from 'react-native'
import COLORS from './Components/const/colors'
import HomeScreen from './Components/Views/Screen/HomeScreen'
import OnBoardScreen from './Components/Views/Screen/OnBoardScreen'
import DetailsScreen from './Components/Views/Screen/DetailsScreen'
import BottomNavigatior from './Components/Views/navigations/BottomNavigatior'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
//
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={OnBoardScreen} name="BORD" />
        <Stack.Screen component={DetailsScreen} name="DETAILS" />
        <Stack.Screen component={BottomNavigatior} name="HOME" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})
