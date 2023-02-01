import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value = {value}
            onChangeText = {setValue}
            style={styles.input} 
            placeholder={placeholder}
            secureTextEntry = {secureTextEntry}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: '#e8e8e8',

        width: '100%',
        borderWidth: 1,
        borderRadius: 5,

        padding: '5%',
        marginVertical: 5,

    },
    input: {},
})

export default CustomInput