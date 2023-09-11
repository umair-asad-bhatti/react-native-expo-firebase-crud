import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {

    const goToDetailPage = () => {
        navigation.navigate("Detail", { 'name': "umair asad" })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>Home</Text>
            <Button onPress={goToDetailPage} title='Detail page'></Button>
        </View>
    )
}

export default Home

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