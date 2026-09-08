import {
  Host,
  LinearProgressIndicator,
} from '@expo/ui/jetpack-compose';
import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";

export default function LinearExample() {
  return (
    <View style={styles.progcard}>
        <Host matchContents  >
      <LinearProgressIndicator progress={0.5} />
    </Host>
    </View>
    
  );
}

const styles = StyleSheet.create({
    progcard:{
        width:'300%',
        marginLeft:50,
        marginBottom:20,
        

    }
})