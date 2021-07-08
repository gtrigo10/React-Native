import React from "react"
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';

function Home({navigation}){

    return(
        <>
        <ScrollView>
            <View style={styles.top}>
                <AntDesign  name="bars" size={24} color="black" />
                <Text>INTERNET BANKING</Text>
                <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
                    <Text style={styles.sair}>SAIR</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.secondTop}>
                <View style={styles.contaSaldo}>
                    <View style={styles.conta}>
                        <Text>Conta</Text>
                        <AntDesign name="down" size={24} color="black" />
                    </View>

                    <View style={styles.saldo}>
                        <Text>Meu Saldo</Text>
                        <AntDesign name="down" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.conta}>
                    <Text style={styles.numeroConta}>XXXX XXX XXXXXXXX-X</Text>
                
                    <Text style={styles.valorSaldo}>R$:100.000.000,00</Text>
                </View>

            </View>
            <View>
                <View style={styles.conta}>
                    <FontAwesome style={styles.firstIcon} name="money" size={80} color="black" />
                    <Entypo style={styles.midleIcon} name="line-graph" size={80} color="black" />
                    <FontAwesome style={styles.lastIcon} name="users" size={80} color="black" />
                </View>
                <View style={styles.conta}>
                    <Text style={styles.fistText}>Minha Conta</Text>
                    <Text style={styles.midleText}>Investimentos</Text>
                    <Text style={styles.lastText}>FGTS e INSS</Text>
                </View>

                <View style={styles.conta}>
                    <AntDesign style={styles.firstIcon} name="barcode" size={80} color="black" />
                    <FontAwesome5 style={styles.midleIcon} name="coins" size={80} color="black" />
                    <MaterialCommunityIcons style={styles.lastIcon} name="clover" size={80} color="black" />
                </View>

                <View style={styles.conta}>
                    <Text style={styles.fistText}>Pagamentos</Text>
                    <Text style={styles.midleText2}>Crédito</Text>
                    <Text style={styles.lastText2}>Pix</Text>
                </View>

                <View style={styles.conta}>
                    <FontAwesome5 style={styles.firstIcon} name="home" size={80} color="black" />
                    <AntDesign style={styles.midleIcon} name="creditcard" size={80} color="black" />
                    <MaterialIcons style={styles.lastIcon} name="phone-android" size={80} color="black" />
                </View>

                <View style={styles.conta}>
                    <Text style={styles.fistText}>Habitação</Text>
                    <Text style={styles.midleText3}>Cartões</Text>
                    <Text style={styles.lastText3}>Caixa celular</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.bottomText}>Fale com a CAIXA no WhatsApp</Text>
                <Ionicons style={styles.bottomIcon} name="logo-whatsapp" size={50} color="black" />
            </View>
            </ScrollView>
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
    secondTop:{
        backgroundColor:"#00bfff"
    },
    sair:{
        flexDirection:"row",
        marginLeft:150
    },
    conta:{
        flexDirection:"row",
    },
    saldo:{
        flexDirection:"row",
        marginLeft:200
    },
    contaSaldo:{
        flexDirection:"row",        
        marginTop:20,
        marginLeft:10
    },
    numeroConta:{
        marginLeft:10,
        marginTop:5
    },
    valorSaldo:{
        marginLeft:85,
        marginTop:5
    },
    firstIcon:{
        marginTop:50,
        marginLeft:30
    },
    midleIcon:{
        marginTop:50,
        marginLeft:40,
        marginRight:40
    },
    lastIcon:{
        marginTop:50,
    },
    fistText:{
        marginTop:15,
        marginLeft:30
    },
    midleText:{
        marginTop:15,
        marginLeft:40,
        marginRight:40
    },
    midleText2:{
        marginTop:15,
        marginLeft:50,
        marginRight:40
    },
    midleText3:{
        marginTop:15,
        marginLeft:80,
        marginRight:40
    },
    lastText:{
        marginTop:15,
    },
    lastText2:{
        marginTop:15,
        marginLeft:50
    },
    lastText3:{
        marginTop:15,
        marginLeft:20
    },
    bottom:{
        paddingTop:75,
        paddingBottom:75,
        flexDirection:"row",
        backgroundColor:"#00bfff"
    },
    bottomText:{
        fontSize:20,
        paddingLeft:15
    },
    bottomIcon:{
        paddingLeft:15
    }

});

export default Home;