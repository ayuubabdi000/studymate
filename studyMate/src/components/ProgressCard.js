
import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import * as Progress from 'react-native-progress';

export default function LinearExample() {
  return (
    <View style={styles.progcard}>
      <Progress.Bar progress={0.30} width={280} />

    </View>
    
  );
}

const styles = StyleSheet.create({
    progcard:{
       
        

    }
})