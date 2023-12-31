import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
const DetailScreen = ({ route, navigation }) => {
    const { id } = route.params
    const [data, setData] = useState({})


    //inputs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    useEffect(() => {
        const getDetails = async () => {
            const docRef = doc(db, "usersData", id)
            const res = await getDoc(docRef)
            return res.data()
        }
        getDetails().then((res) => setData(res))

    }, [id])
    useEffect(() => {
        setUsername(data.username)
        setEmail(data.email)
        setAge(data.age)
        setContactNumber(data.contactNumber)
    }, [data])
    const handleEdit = () => {
        const editData = async () => {
            await setDoc(doc(db, "usersData", id), {
                username, email, contactNumber, age
            })
        }
        editData().then(() => navigation.navigate("HomeScreen"))
    }
    const handleDelete = async () => {
        deleteDoc(doc(db, "usersData", id))
        navigation.navigate("HomeScreen")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username"
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Age:</Text>
            <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                placeholder="Enter your age"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Contact Number:</Text>
            <TextInput
                style={styles.input}
                value={contactNumber}
                onChangeText={setContactNumber}
                placeholder="Enter your contact number"
                keyboardType="phone-pad"
            />
            <Button title={'edit'} onPress={handleEdit} />
            <View style={{ marginTop: 20 }}>

                <Button color={'red'} title={'delete'} onPress={handleDelete} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
});
export default DetailScreen