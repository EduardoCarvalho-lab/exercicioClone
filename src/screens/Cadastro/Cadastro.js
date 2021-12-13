import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../../global'
import Logo from '../../../assets/LinkedinLogo.png'
import G from '../../../assets/Google.png'

export default function Cadastro() {
    const navigation = useNavigation();
    return (
        <View style={{paddingVertical: 50, flex: 1,
            paddingHorizontal: 15,
            backgroundColor: '#313335',
            alignItems: "stretch",
            justifyContent: "space-between",}}>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>
            <Text style={{flexDirection: 'row', fontSize: 28, color: '#CACCCE'}}>Cadastre-se no LinkedIn</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={{ fontSize: 15, color: '#CACCCE'}}>ou </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{ fontSize: 15, color: 'blue'}}>entre</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 15, color: '#CACCCE'}}> na sua conta</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={{color: 'lightgrey'}}>E-mail ou telefone*</Text>
                <TextInput placeholderTextColor="grey" keyboardType="email-address" style={styles.input}></TextInput>
            </View>
            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.textoBotao}>Continuar</Text>
            </TouchableOpacity>
            <View><Text style={{ color: 'lightgrey', textAlign: "center" }}>ou</Text></View>
            <View>
                <TouchableOpacity style={{
                    backgroundColor: '#313335',
                    borderColor: 'white',
                    borderWidth: 2,
                    borderRadius: 25,
                    paddingVertical: "2%",
                    justifyContent: "center",
                    alignContent: "center",
                    height: 50,
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                }}>
                    <Image source={G} />
                    <Text style={{ fontSize: 20, color: 'white' }}>Entrar com Google</Text>
                </TouchableOpacity>
            </View>
            <View></View>
            <View></View>
        </View>
    )
}
