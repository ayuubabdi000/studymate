
import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'
import image from '../images/image.png'
import SesionCard from '../components/SesionCard'
import Header from '../components/Header'
export default function app() {
    return (
        <View style={styles.container}>
           <Header />
            <View style={styles.toptext} >
                <Text style={styles.welcome}>Welcome Back</Text>
                <Text style={styles.greet}>Hello,  Ayuub</Text>
            </View>
            <View style={styles.reccon}>
                <Text style={styles.recsestxt} >Recomended Sesions</Text>
                <Text style={styles.viewalltxt} >View all</Text>
            </View>
            <SesionCard />
            <SesionCard />
            <SesionCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.bgLight,
        flex: 1
    },

   
    toptext: {
        margin: 30
    },
    welcome: {
        color: COLORS.neutralDark,
        fontSize: TYPOGRAPHY.fontSize.md,
        fontWeight: TYPOGRAPHY.fontWeight.regular
    },
    greet: {
        color: COLORS.neutralDark,
        fontSize: TYPOGRAPHY.fontSize.display,
        fontWeight: TYPOGRAPHY.fontWeight.regular,
        marginTop: -5
    },
    reccon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    recsestxt: {
        fontWeight: TYPOGRAPHY.fontWeight.bold,
        fontSize: TYPOGRAPHY.fontSize.xl,

    },
    viewalltxt:{
       fontSize: TYPOGRAPHY.fontSize.xl,
    }
})