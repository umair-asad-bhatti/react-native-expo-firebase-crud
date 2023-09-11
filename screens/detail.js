import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Detail = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>Detail</Text>
            <Text>{route.params.name}</Text>
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

export default Detail
