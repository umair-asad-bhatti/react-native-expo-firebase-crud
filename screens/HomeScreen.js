import { StyleSheet, FlatList, View, Button, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { onSnapshot, collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
const HomeScreen = ({ navigation }) => {
    const [usersData, setUsersData] = useState([])
    useEffect(() => {
        onSnapshot(collection(db, "usersData"), (docs) => {
            let data = []
            docs?.forEach(doc => data.push({ ...doc.data(), id: doc.id }))
            setUsersData(data)
        });
    }, [])

    const goToAddRecordScreen = () => {
        navigation.navigate("AddRecord")
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={usersData}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("DetailScreen", { id: item.id })}>
                            <ScrollView key={item.id} horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Text style={{ padding: 10 }}>{item.username}</Text>
                                <Text style={{ padding: 10 }}>{item.email}</Text>
                                <Text style={{ padding: 10 }}>{item.age}</Text>
                                <Text style={{ padding: 10 }}>{item.contactNumber}</Text>
                            </ScrollView >
                        </TouchableOpacity>
                    )
                }}
            />
            <Button onPress={goToAddRecordScreen} title='Add record' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

})
export default HomeScreen
