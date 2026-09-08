import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'

export default function app() {
    return (


        <View style={styles.quationcard}>
            
            <View style={styles.wordcon}>
                <Text style={styles.wordtxt}>A</Text>
            </View>
            <Text
                numberOfLines={4} 

                style={styles.quationtext}>What is a hobby or project you are currently focusing on? </Text>
        </View>


    )
}

const styles = StyleSheet.create({

    quationcard: {
        padding: 0,
        backgroundColor: COLORS.cardBg,
        borderRadius: BORDER_RADIUS.lg,
        flexDirection: 'row',
        padding:20,
        gap:10,
        alignItems:'center',
        marginBottom:10

    },

    quationtext: {

        fontSize: TYPOGRAPHY.fontSize.md,
        fontWeight: TYPOGRAPHY.fontWeight.regular,
        width:'80%'
        

    },
    wordcon: {
        backgroundColor: COLORS.accentSuccess,
        opacity: 0.5,
        height: 50,
        width: 50,
        borderRadius: 60,
        alignItems:'center',
        justifyContent:'center',

    },
    wordtxt:{
        fontSize: TYPOGRAPHY.fontSize.xxl,
        fontWeight: TYPOGRAPHY.fontWeight.medium,

    }


})