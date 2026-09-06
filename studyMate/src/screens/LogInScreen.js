import { View, StyleSheet, Text, Image, Button, Pressable } from "react-native";
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'
import Login from '../components/Login'
import SingUp from '../components/Login'


export default function app() {
    return (
        <View style={styles.container}>
            <View style={styles.logsing}>

                <Pressable>
                    <Text>Sing Up</Text>
                </Pressable>
                <Pressable>
                    <Text>Login</Text>
                </Pressable>


            </View>
            <SingUp />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.bgLight,
        flex: 1
    },
    logsing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingLeft: 70,
        paddingRight: 70,
        marginTop: 200,
        backgroundColor: COLORS.primary,
        height: 50,
        width: '80%',
        marginLeft: '10%',
        borderRadius: BORDER_RADIUS.xl,
        opacity: 0.2

    },
    log: {

        marginTop: 5,
        height: 40,
        width: 100,
        backgroundColor: 'red',
        marginLeft: '5%',
        borderRadius: BORDER_RADIUS.xl,

    }
})