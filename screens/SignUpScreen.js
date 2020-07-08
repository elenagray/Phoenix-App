import React from 'react';

import {
    View, Text,
    Button, StyleSheet
} from 'react-native';

const SignUpScreen = () => {
    return(
        <View style = {StyleSheet.container}>
            <Text>Sign Up Screen</Text>
            <Button
                title ="Click here!"
                onPress = {() => alert("Button clicked!")}
            />
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});