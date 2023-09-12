import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const DetailScreen = ({ route, navigation }) => {
    const goBackToLoginScreen = () => {
        navigation.navigate("LoginScreen")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>Detail</Text>
            <Text>{route.params.name}</Text>
            <Button title='Go back to Login' onPress={goBackToLoginScreen}></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeText: {
        fontSize: 40
    }
})

export default DetailScreen
