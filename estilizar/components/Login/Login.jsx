import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CaixaLogo from "../../assets/caixa-logo-2019.jpg";
import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';

function Login({navigation}){


    return(
    <>
        <View style={styles.top}>
        <AntDesign  name="bars" size={24} color="black" />
        <Text>INTERNET BANKING</Text>
      </View>

      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.imagem} source={CaixaLogo} />
        <View style={styles.usuario}>
          <View style={styles.usuario2}>
            <Text>Usuário</Text>
            <Text style={styles.lembrar}>Lembrar meu usuário</Text>
          </View>
          <View style={styles.usuario2}>
            <Text>10837022703</Text>
            <Fontisto style={styles.lembrar} name="checkbox-active" size={24} color="black" />
          </View>
          <Text>Pessoa Fisica</Text>
        </View>
        <View style={styles.digital}>
          <Fontisto name="checkbox-active" size={24} color="white" />
          <Text style={styles.leitorDigital}>Leitor digital</Text>
          <Entypo name="fingerprint" size={24} color="white" />
        </View>
        <View style={styles.digital}>
          <Text style={styles.outro}>Acessar com outro usuário</Text>
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
        <View style={styles.acesso}>
            <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                <Text style={styles.acessoTexto}>Toque no sensor para acessar</Text>
            </TouchableOpacity>
        </View>

      </View>
    </>
    );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#1e90ff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        top:{
          marginLeft: 20,
          marginTop: 50,
          flexDirection: "row"
        },
        imagem:{
          width:300,
          height:150,
          marginBottom:20,
          borderRadius:50
        },
        usuario:{
          borderWidth: 2,
          width:300,
          backgroundColor: "white",
          borderRadius:7,
          borderColor:"#1e90ff"
        },
        usuario2:{
          flexDirection:"row"
        },
        lembrar:{
          marginLeft:100
        },
        digital:{
          flexDirection:"row",
          marginTop:25,
          
        },
        leitorDigital:{
          paddingLeft:20,
          paddingRight: 20,
          color:"white"
        },
        outro:{
          color:"white"
        },
        acesso:{
          borderWidth:2,
          borderRadius:7,
          marginTop:15,
          backgroundColor:"#ffd700",
          borderColor:"#1e90ff"
        },
        acessoTexto:{
          color:"white",
          fontSize:24,
          fontWeight:"bold",
          marginBottom:10,
          marginLeft:10,
          marginTop:10,
          marginRight:10
        }
      });

export default Login;