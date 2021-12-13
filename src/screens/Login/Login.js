import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../../global';
import Logo from '../../../assets/LinkedinLogo.png'
import G from '../../../assets/Google.png'
import A from '../../../assets/Apple.png'

export default function Login() {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image source={Logo} />
                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.headerText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textoView}>
                <Text style={styles.texto}>Entrar</Text>
            </View>
            <View style={styles.viewInput}>
                <TextInput placeholder="Email" placeholderTextColor="grey" keyboardType="email-address" style={styles.input}></TextInput>
            </View>
            <View style={styles.viewInput}>
                <TextInput placeholder="Senha" placeholderTextColor="grey" secureTextEntry={true} style={styles.input}></TextInput>
            </View>
            <View style={{ backgroundColor: '#313335', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => setChecked(!checked)} style={{
                    backgroundColor: checked ? 'lightgreen' : '#313335',
                    width: 20,
                    height: 20,
                    borderStyle: 'solid',
                    borderColor: "grey",
                    borderRadius: 6,
                    borderWidth: 2,
                }}>
                    {checked ? <Text style={{ textAlign: 'center' }}>V</Text> : <View style={{
                        borderStyle: 'solid',
                        borderColor: "grey",
                        borderRadius: 6,
                        backgroundColor: '#313335',
                        width: 20,
                        heiht: 20,
                    }}>
                    </View>}

                </TouchableOpacity>
                <Text style={{ justifyContent: 'center', color: 'grey', fontSize: 16 }}>Lembrar dos meus dados.</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'lightblue', fontSize: 16 }}>Saiba mais</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={{ textAlign: 'left', color: '#00A0DC', fontSize: 16 }}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.botao}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.textoBotao}>Continuar</Text>
                </TouchableOpacity>
            </View>

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
                }}
                onPress={() => navigation.navigate('https://www.google.com.br/')} >
                    <Image source={G} />
                    <Text style={{ fontSize: 20, color: 'white' }}>Entrar com Google</Text>
                </TouchableOpacity>

            </View>
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
                    <Image source={A} />
                    <Text style={{ fontSize: 20, color: 'white' }}>Entrar com Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
        /*      <View style={{ justifyContent: 'left' }}>
              </View>   */
        //         </View>
    )
}




