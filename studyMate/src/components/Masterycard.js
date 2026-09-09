import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'
import image from '../images/image.png'
import ProgressCard from './ProgressCard'



export default function Masterycard() {
    return (
        <View style={styles.mastery}>
            <View style={styles.topcon}>
                <View style={styles.left}>
                    <View style={styles.iconcon}>

                    </View>
                    <View style={styles.title}>
                        <Text >
                            Natural Secnice
                        </Text>

                        <Text style={styles.subjectname}>
                            Biology
                        </Text>
                    </View>

                </View>
                <View style={styles.right}>
                    <Text style={styles.prognum}>86%</Text>
                    <Text style={styles.prognum}>Strong Recal</Text>
                </View>
            </View>
            <ProgressCard style={styles.procard}/>
            <View style={styles.botcard}>
                <Text>
                    14/18 Topics
                </Text>
                <Text>
                    Exam ready
                </Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    mastery: {
        backgroundColor: 'white',
        marginTop: 30,
        borderRadius: 10,
        padding: 20
    },
    topcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20
    },
    left: {
        flexDirection: 'row',
        gap: 20,

    },
    iconcon: {
        height: 40,
        width: 40,
        backgroundColor: COLORS.overlay,
        borderRadius: BORDER_RADIUS.full,
        opacity: 0.2
    },
    subjectname: {
        fontSize: TYPOGRAPHY.fontSize.md,
        fontFamily: TYPOGRAPHY.fontFamily.editorial,
        fontWeight: TYPOGRAPHY.fontWeight.bold



    },
    right: {
        alignItems: 'center'
    },
    prognum: {
        fontSize: TYPOGRAPHY.fontSize.lg,
        fontFamily: TYPOGRAPHY.fontFamily.editorial,
        fontWeight: TYPOGRAPHY.fontWeight.medium
    },
    title: {
        justifyContent: 'center'
    },
    botcard:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    procard:{
        width:'100%',
        marginLeft:20
    }


})