import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'
import image from '../images/image.png'
export default function (){
    return(
        <View style={styles.header}>
                <View style={styles.left}>
                    <Image source={image} style={styles.logo} />
                    <View style={styles.logotxt}>
                        <Text style={styles.logoone}>Study Mate</Text>
                        <Text style={styles.logotwo}>Home Dashboard</Text>
                    </View>

                </View>
                <View style={styles.right}>
                    <Image source={image} style={styles.logo} />
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    
    header: {
        backgroundColor: 'white',
        height: 90,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        height: 40,
        width: 40
    },
    left: {
        flexDirection: 'row',
        gap: 20
    },
    logotxt: {

    },
    logoone: {
        fontSize: TYPOGRAPHY.fontSize.md
    },
    logotwo: {
        color: COLORS.neutralDark,
        fontSize: TYPOGRAPHY.fontSize.xl,
        fontWeight: TYPOGRAPHY.fontWeight.medium
    },
   
})