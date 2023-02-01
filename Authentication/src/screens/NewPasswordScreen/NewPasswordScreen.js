import React, {useState} from "react";
import { Text, View, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {

    const {code, setCode} = useState('')
    const {newPassword, setNewPassword} = useState('')
    const {newPasswordRepeat, setNewPasswordRepeat} = useState('')

    const navigation = useNavigation()

    const onResetPressed = () => {
        console.warn("Reset");
        navigation.navigate("Home")
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

            <CustomInput placeholder="Code" value={code} setValue={setCode} />

            <CustomInput placeholder="New Password" value={newPassword} setValue={setNewPassword} secureTextEntry/>

            <CustomInput placeholder="Verify Password" value={newPasswordRepeat} setValue={setNewPasswordRepeat} secureTextEntry/>

            <CustomButton text="Reset" onPress={onResetPressed} />

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

export default NewPasswordScreen