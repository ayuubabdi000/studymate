
import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import * as Progress from 'react-native-progress';

export default function LinearExample({
  progress = 0.3,
  width = 280,
  borderColor = "red",
  color = "red",
}) {
  return (
    
      <Progress.Bar progress={progress} width={width} borderColor={color}/>

    
    
  );
}

