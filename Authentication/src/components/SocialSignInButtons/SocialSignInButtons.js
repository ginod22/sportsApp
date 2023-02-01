import React from "react";
import {View, Text} from 'react-native';
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
    const onSignInFacebookPressed = () => {
        console.warn("Facebook Sign In");
    }

    const onSignInGooglePressed = () => {
        console.warn("Google Sign In");
    }

    const onSignInApplePressed = () => {
        console.warn("Apple Sign In");
    }
    
    return (
        <> 
            <CustomButton text="Sign In With Facebook" onPress={onSignInFacebookPressed} bgColor="#E7EAF4" fgColor="#4765A9" />
            
            <CustomButton text="Sign In With Google" onPress={onSignInGooglePressed} bgColor="#F9E9EA" fgColor="#DD4D44" />
            
            <CustomButton text="Sign In With Apple" onPress={onSignInApplePressed} bgColor="#e3e3e3" fgColor="#363636"/>
        </>
    )
}

export default SocialSignInButtons