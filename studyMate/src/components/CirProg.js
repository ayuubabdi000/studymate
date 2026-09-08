import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";

import {
  Host,
  CircularProgressIndicator,
} from '@expo/ui/jetpack-compose';
import { align, height } from '@expo/ui/jetpack-compose/modifiers';
import { background } from "@expo/ui/swift-ui/modifiers";

export default function CirProg() {
  return (
    <View>
    <View style={styles.circle}>
      
       <Host matchContents style={{
        transform: [{ scale: 3 }],
        alignItems:'center',
      }}
>
      <CircularProgressIndicator
        progress={0.6}
        color="#F5A893"
        trackColor="#E5E5E5"
        
      
      

      />
    </Host>
    </View>
    <Text style={styles.prognumtext}>
        90%
      </Text>
      </View>
   
  );
}

const styles = StyleSheet.create({
  circle:{
    
  },
  prognumtext:{
    fontSize:28,
    top:-40
  }
})