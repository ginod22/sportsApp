import React, {useState} from "react";
import { Text, View, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {

    const {email, setEmail} = useState('')

    const navigation = useNavigation()

    const onSendPressed = () => {
        console.warn("Send");
        navigation.navigate("NewPassword")
    }
  
    const onBackToSignInPressed = () => {
        console.warn("Back to Sign In")
        navigation.navigate("SignIn")
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
            <Text style={styles.title}>
                Reset Your Password
            </Text>

            <CustomInput placeholder="Email" value={email} setValue={setEmail} />

            <CustomButton text="Send" onPress={onSendPressed} />

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

export default ForgotPasswordScreen