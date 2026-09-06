import { View ,StyleSheet, Text,Image,Button,Pressable} from "react-native";
import COLORS from '../theme/colors'
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import logo from '../images/logo.png'
export default function app(){
    return(
        <View style={styles.container}>
            <View>
            <View style={styles.logocon}>
                <Image source={logo} style={styles.logo}/>
                
            </View>
            <View style={styles.textcon}>
                <Text style={styles.title}>
                    Study smarter
            </Text>
            <Text style={styles.subtitle}>Feel ready</Text>
            </View>
            <View style={styles.breath}>
                <Text style={styles.dot}>One Topic At Time</Text>

            </View>

             <Pressable style={styles.GetStarted} ><Text style={styles.GetStartedText}>GetStarted</Text></Pressable>
             <Text style={styles.aha}>Already Have Account<Text style={styles.login}> Login</Text></Text>
        
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor:COLORS.tertiary
  },
  logocon:{
    width:300, 
    height:300,
  },
  logo:{
    marginLeft:-50,
    marginTop:0
    
  },
  textcon:{
    alignItems:'center',
    marginTop:100
  },
  title:{
    alignItems:'center',
    
    fontFamily:TYPOGRAPHY.fontFamily.editorial,
    fontSize:TYPOGRAPHY.fontSize.xxl,
    fontWeight:TYPOGRAPHY.fontWeight.semibold,
    
  },
  subtitle:{
    fontFamily:TYPOGRAPHY.fontFamily.editorial,
    fontSize:TYPOGRAPHY.fontSize.xl,
    fontWeight:TYPOGRAPHY.fontWeight.regular,
  },
  breath:{
    marginTop:20,
    backgroundColor:COLORS.primary,
    height:50,
    width:'60%',
    marginLeft:'20%',
    borderRadius:BORDER_RADIUS.xl,
    opacity: 0.2
    

  },
  dot:{
    top:10,
    left:30,
    fontSize:TYPOGRAPHY.fontSize.xl,
    fontWeight:TYPOGRAPHY.fontWeight.regular,    
    color:'black'
  },
  GetStarted:{
    width:'80%',
    height:60,
    backgroundColor:COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    marginLeft:'10%',
    borderRadius:BORDER_RADIUS.xl,
    


  },
  GetStartedText:{
    color:'white',
    fontSize:TYPOGRAPHY.fontSize.xl,
    fontWeight:TYPOGRAPHY.fontWeight.regular,   
  },
  aha:{
    marginTop:20,
    left:120
  },
  login:{
    fontWeight:TYPOGRAPHY.fontWeight.semibold,  
    textDecorationLine: 'underline',

  }

});