import React, {useState} from "react";
import { Text, View, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {

    const {username, setUsername} = useState('')
    const {email, setEmail} = useState('')
    const {password, setPassword} = useState('')
    const {passwordRepeat, setPasswordRepeat} = useState('')

    const navigation = useNavigation()

    const onRegisterPressed = () => {
        console.warn("Register");
        //Logic
        navigation.navigate("ConfirmEmail")
    }

    const onTermsPressed = () => {
        console.warn("Terms ")
    }

    const onPrivacyPressed = () => {
        console.warn("Privacy ")
    }

    const onHaveAnAccountPressed = () => {
        console.warn("Have an account");
        navigation.navigate("SignIn")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
            <Text style={styles.title}>
                Create an Account
            </Text>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />

            <CustomInput placeholder="Email" value={email} setValue={setEmail} />
            
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
            
            <CustomInput placeholder="Verify Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry/>

            <CustomButton text="Register" onPress={onRegisterPressed} />
            
            <Text style={styles.text}>By registering you confirm that you accept our {""}
            <Text style={styles.link} onPress= {onTermsPressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy. </Text> </Text>

            <SocialSignInButtons />

            <CustomButton text="Have an Account? Sign In" onPress={onHaveAnAccountPressed} type="TERTIARY"/>
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

export default SignUpScreen