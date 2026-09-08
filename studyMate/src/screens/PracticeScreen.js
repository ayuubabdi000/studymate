import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import Header from '../components/Header'
import LinearExample from '../components/ProgressCard'
import AnswerCard from '../components/AnswerCard'
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'
import image from '../images/image.png'
import profile from '../images/profile.jpeg'
// import * as Progress from 'react-native-progress';


export default function app() {
    return (
        <View style={styles.Container}>
            <Header />

            <View style={styles.practiceContainer}>
                {/* <Progress.Bar progress={0.3} width={200} /> */}
              
                <View style={styles.topcard}>
                    <Text style={styles.quationnum}>Quation 4/10</Text>
                    <Text style={styles.chaptername}>Quadratic Equation</Text>
                </View>
                  <LinearExample style={styles.procard}/>

                <View style={styles.quationcard}>
                    <Text style={styles.quationtext}>What is a hobby or project you are currently focusing on? </Text>
                </View>
                <AnswerCard />
                <AnswerCard />
                <AnswerCard />
                <AnswerCard />
            </View>
          
        </View>

    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:COLORS.tertiary
    },
    practiceContainer:{

        height:800,
        margin:20
    },
    quationcard:{
        paddingBottom:30,
        backgroundColor:COLORS.cardBg,
        borderRadius:BORDER_RADIUS.lg,
        marginBottom:20
    },
    topcard:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:16
    },
    quationnum:{
        fontFamily:TYPOGRAPHY.fontFamily.editorial,
        fontSize:TYPOGRAPHY.fontSize.md,
        fontWeight:TYPOGRAPHY.fontWeight.medium
        
    },
    chaptername:{
        fontFamily:TYPOGRAPHY.fontFamily.editorial,
        fontSize:TYPOGRAPHY.fontSize.md,
        fontWeight:TYPOGRAPHY.fontWeight.medium
    },
    quationtext:{
        padding:30,
        fontSize:TYPOGRAPHY.fontSize.xl,
        fontWeight:TYPOGRAPHY.fontWeight.regular,
        alignItems:'center',
        justifyContent:'center'
    },
    procard:{
        width:100,
    }


})