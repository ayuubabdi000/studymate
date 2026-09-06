import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen'
import HomeDashboard from './src/screens/HomeDashboard'
import LogInScreen from './src/screens/LogInScreen'
export default function App() {
  return (
    // <WelcomeScreen />
    <HomeDashboard />
  );
}


