import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';

import React, { useState } from 'react';
import { app, db } from '../firebase/firebase'
import { addDoc, doc, collection } from 'firebase/firestore';
export default function AddRecord({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async () => {
        // Handle form submission logic here
        setIsSubmitting(true)
        try {
            await addDoc(collection(db, "usersData"), {
                username, email, age, contactNumber
            })
            Alert.alert("App", 'Record Added', [
                {
                    text: 'Go back to dashboard',
                    onPress: () => navigation.navigate("HomeScreen")
                },
                {
                    text: 'Ok',
                    onPress: () => null
                }
            ])
        } catch (error) {
            Alert.alert("Error from addRecord Screen!", error)
        }
        setIsSubmitting(false)

    };

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

            <Button title={isSubmitting ? 'submitting...' : 'Submit'} onPress={!isSubmitting && handleSubmit} />
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