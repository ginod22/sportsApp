import React, {useState} from "react";
import { Text, View, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ConfrimEmailScreen = () => {

    const {code, setCode} = useState('')

    const navigation = useNavigation()

    const onConfirmPressed = () => {
        console.warn("Confirm");
        navigation.navigate("Home")
    }
  
    const onBackToSignInPressed = () => {
        console.warn("Back to Sign In")
        navigation.navigate("SignIn")
    }

    const onResendCodePressed = () => {
        console.warn("Resend Code ")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
            <Text style={styles.title}>
                Confirm Your Email
            </Text>

            <CustomInput placeholder="Confirmation Code" value={code} setValue={setCode} />

            <CustomButton text="Confirm" onPress={onConfirmPressed} />

            <CustomButton text="Resend Code" onPress={onResendCodePressed} type="SECONDARY"/>

            <CustomButton text="Back to Sign In" onPress={onBackToSignInPressed} type="TERTIARY"/>

        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#051C60',
        margin:10,
    },
    text:{
        color:'grey',
        marginVertical:10,
    },
    link:{
        color:'#FDB075',

    },

})

export default ConfrimEmailScreen