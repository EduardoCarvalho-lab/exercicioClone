import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../../global';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>LinkedIn Home</Text>
            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.textoBotao}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
