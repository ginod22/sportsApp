import React, {useState} from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from "../../../assets/images/logoangel.png"
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../navigation";

const SignInScreen = () => {

    const {username, setUsername} = useState('')

    const {password, setPassword} = useState('')

    const {height} = useWindowDimensions()

    const navigation = useNavigation()

    const onSignInPressed = () => {
        console.warn("Sign In");
        //Validate User

        navigation.navigate('Home')
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
        navigation.navigate("ForgotPassword")
    }

    const onSignUpPressed = () => {
        console.warn("Sign Up");
        navigation.navigate("SignUp")
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
            <Image source={Logo} style = {[styles.logo, {height: height * 0.3}]} resizeMode="contain"/> 

            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
            
            <CustomButton text="Sign In" onPress={onSignInPressed} />
            
            <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
            
            <SocialSignInButtons />

            <CustomButton text="Don't Have An Account? Create One" onPress={onSignUpPressed} type="TERTIARY"/>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 300,
    }
})

export default SignInScreen