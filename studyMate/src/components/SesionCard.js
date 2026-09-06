import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'
import alarm from '../images/alarm.png'
import play from '../images/play.png'

export default function app() {
    return (
        <View style={styles.card}>
            
            <View style={styles.maintxt}>
                <Text style={styles.right}>
                    Biology
                </Text>
                <View style={styles.time}>
                    <Image source={alarm} style={styles.alarmicon} />
                    <Text style={styles.minutes}>15 Minutes</Text>

                </View>
                

            </View>
            <View style={styles.titlecon}>
                <Text style={styles.title}>Cell Division</Text>
                <Text style={styles.sectitle}>Cell Division</Text>
            </View>
            <View>
                    <Image source={play} style={styles.play}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 30,
        paddingBottom:10,
        // height: 120,
        width: '85%',
        backgroundColor: COLORS.secondary,
        marginLeft: 30,
        borderRadius: BORDER_RADIUS.sm,
        opacity: 0.5


    },
    maintxt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    time: {
        flexDirection: 'row',
        gap: 5
    },
    alarmicon: {
        height: 15,
        width: 15,
        marginTop: 3,


    },
    play: {
        height: 50,
        width: 50,
        left:270,
        top:-10



    },
    right: {
        fontSize: TYPOGRAPHY.fontSize.xl,
        marginTop: -10
    },
    
    titlecon:{
       marginTop:-20,
        
        paddingLeft:20
    },
    title:{
         color: COLORS.neutralDark,
        fontSize: TYPOGRAPHY.fontSize.display,
        fontWeight: TYPOGRAPHY.fontWeight.regular,
    }
    
})