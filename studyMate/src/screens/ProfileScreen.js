import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import Header from '../components/Header'
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'
import image from '../images/image.png'
import profile from '../images/profile.jpeg'
export default function app() {
    return (
        <View style={styles.profile}>
            <Header />
            <View style={styles.container}>
                <View style={styles.profilecard}>
                    <Image source={profile} style={styles.profileimage} />
                    <Text style={styles.username}>Ayuub Abdirizak</Text>
                    <View style={styles.btncard}>
                        <Pressable style={styles.editbtn}>
                            <Text style={styles.edittxt}>Edit profile </Text>
                        </Pressable>
                        <Pressable style={styles.sharebtn}>
                            <Text style={styles.sharetxt}>Share Profile </Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.habitmcard}>
                    <View style={styles.activitycard}>
                        <Text style={styles.acnum}>200</Text>
                        <Text style={styles.acname}>Sessions</Text>
                    </View>
                    <View style={styles.activitycard}>
                        <Text style={styles.acnum}>48</Text>
                        <Text style={styles.acname}>Deep Hours</Text>

                    </View>
                    <View style={styles.activitycard}>
                        <Text style={styles.acnum}>70</Text>
                        <Text style={styles.acname}>Practices</Text>

                    </View>

                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        backgroundColor: COLORS.tertiary



    },
    container: {
        height: 700,
        margin: 30

    },
    profilecard: {
        backgroundColor: COLORS.cardBg,
        height: 300,
        width: '100%',
        borderRadius: 22,
        alignItems: 'center'


    },
    profileimage: {
        height: 120,
        width: 120,
        borderRadius: 90,
        marginTop: 40,
        // marginLeft:100

    },
    username: {
        fontSize: TYPOGRAPHY.fontSize.xxl,
        fontWeight: TYPOGRAPHY.fontWeight.regular,
        fontFamiliy: TYPOGRAPHY.fontFamily.editorial,
        marginTop: 15,

    },
    btncard: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 20

    },
    editbtn: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10
    },
    edittxt: {
        color: 'white',

    },
    sharebtn: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.tertiary,

    },
    sharetxt: {
        color: 'black',


    },
    habitmcard: {
        marginTop: 30,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10

    },
    activitycard: {
        height: 90,
        width: 90,
        backgroundColor: COLORS.tertiary,
        borderRadius: 22,
        opacity: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
        

    },

    acnum:{
        fontSize: TYPOGRAPHY.fontSize.lg,
        fontWeight: TYPOGRAPHY.fontWeight.bold,
        fontFamiliy: TYPOGRAPHY.fontFamily.editorial,
        color:'black'
    },
    acname:{
        fontSize: TYPOGRAPHY.fontSize.md,
        fontWeight: TYPOGRAPHY.fontWeight.bold,
        fontFamiliy: TYPOGRAPHY.fontFamily.editorial,
        color:'black'
    }


})