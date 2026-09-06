import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'
import image from '../images/image.png'

export default function app() {
    return (
        <View style={styles.container}>
           
            <View style={styles.inputcard}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputcard}>
                <Text style={styles.label}>PassWord</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.SingUpcontainer}>
                <Pressable style={styles.SingUp} ><Text style={styles.SingUpText}>Sing Up</Text></Pressable>

            </View>
            <View style={styles.google}>
                <Image source={image} style={styles.googlogo} />
                <Text style={styles.contwithgoog}>Continue With Google</Text>




            </View>
            <Text style={styles.aha}>dont Have Account<Text style={styles.login}> sing Up</Text></Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        height: 500,
        width: '80%',
        marginLeft: '10%',

    },
    inputcard: {
        marginBottom: 20,
    },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.textMuted,
        borderStyle: 'solid',
        borderRadius: 8,
        marginTop: 5
    },
    label: {
        fontFamily: TYPOGRAPHY.fontFamily.editorial,

        fontWeight: TYPOGRAPHY.fontWeight.semibold,

    },
    SingUpcontainer: {
        width: '100%',
        alignItems: 'center'
    },
    SingUp: {
        width: '50%',
        height: 40,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: BORDER_RADIUS.xl,



    },
    SingUpText: {
        color: 'white',
        fontSize: TYPOGRAPHY.fontSize.xl,
        fontWeight: TYPOGRAPHY.fontWeight.regular,
    },
    google: {
        flexDirection: 'row',
        gap: 20,
        backgroundColor: COLORS.white,
        height: 60,
        width: '100%',
        marginTop: 30,
        borderRadius: BORDER_RADIUS.xl,
        padding: 10

    },
    googlogo: {
        height: 40,
        width: 40,
        marginLeft: 20

    },
    contwithgoog: {
        marginTop: 5,
        fontSize: TYPOGRAPHY.fontSize.xl,
        fontWeight: TYPOGRAPHY.fontWeight.semibold,
    },
    aha: {
        marginTop: 20,
        marginLeft: 70
    },
    login: {
        fontWeight: TYPOGRAPHY.fontWeight.semibold,
        textDecorationLine: 'underline',

    }

})