import "react-native-gesture-handler"
import { NavigationContainer} from "@react-navigation/native"
import { createDrawerNavigator, CreateDrawerNavigator} from "@react-navigation/drawer"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen'
import HomeDashboard from './src/screens/HomeDashboard'
import LogInScreen from './src/screens/LogInScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import PracticeScreen from './src/screens/PracticeScreen'
import ProgressScreen from './src/screens/ProgressScreen'
export default function App() {

  const Drawer = createDrawerNavigator()
  return (
    // <WelcomeScreen />
    // <HomeDashboard />
    
    // <ProgressScreen  />
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeDashboard}/>
        <Drawer.Screen name="LogIn" component={PracticeScreen}/>
        <Drawer.Screen name="LogIn" component={ProgressScreen}/>
        <Drawer.Screen name="LogIn" component={ProfileScreen}/>
      </Drawer.Navigator >
    </NavigationContainer>


  );
}


