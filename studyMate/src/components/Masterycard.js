import { View, StyleSheet, Text, Image, Button, Pressable, TextInput } from "react-native";
import TYPOGRAPHY from '../theme/typography'
import BORDER_RADIUS from '../theme/radius'
import COLORS from '../theme/colors'
import image from '../images/image.png'


export default function Masterycard() {
    return (
        <View style={styles.mastery}>
            <View style={styles.topcon}>
                <View style={styles.left}>
                    <View style={styles.iconcon}>

                    </View>
                    <Text style={styles.subjectname}>
                        Biology
                    </Text>
                </View>
                <View style={styles.right}>
                    <Text>86%</Text>
                    <Text>Strong Recal</Text>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    mastery: {

        height: 100,

        backgroundColor: 'white',
        marginTop: 30,
        borderRadius: 10


    },
    topcon: {
        flexDirection: 'row'
    },
    left:{
        flexDirection:'column'
    },
    iconcon:{
        height:40,
        width:40,
        backgroundColor:'red',
    },


})