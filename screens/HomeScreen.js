import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {

    const goToDetailPage = () => {
        navigation.navigate("DetailScreen", { 'name': "umair asad" })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>Home</Text>
            <Button onPress={goToDetailPage} title='Detail page'></Button>
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
export default HomeScreen
