
import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'
import image from '../images/image.png'
import SesionCard from '../components/SesionCard'
import Header from '../components/Header'
import CirProg from '../components/CirProg'
import Masterycard from '../components/Masterycard'
export default function app() {
    return (
        <View style={styles.container}>
           <Header />
           <View style={styles.mainCon}>
            <View style={styles.titlecon}>
                <Text style={styles.title}>Your Progress</Text>

            </View>
           <View style={styles.cirprogcard}>
            <CirProg />

            <Text style={styles.mastext}>Overall Mastery</Text>

           </View>
           <Masterycard />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.tertiary,
        flex: 1
    },
    mainCon:{
        margin:30
    },
    titlecon:{
        alignItems:'center',
        marginBottom:10,
    },
    title:{
        fontSize:TYPOGRAPHY.fontSize.xxl,
        fontFamily:TYPOGRAPHY.fontFamily.primary
    },
    cirprogcard:{
        height:200,
        borderRadius:BORDER_RADIUS.md,
        paddingTop:30,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'

    },
    mastext:{
        marginTop:10,
        fontSize:TYPOGRAPHY.fontSize.xxl,
        fontFamily:TYPOGRAPHY.fontFamily.primary

    }


    
})