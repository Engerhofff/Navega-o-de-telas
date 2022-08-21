import React, {Component} from "react";
import { View,Text, StyleSheet } from "react-native"


export default class sobre extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}> Seja Bem vindo ao meu primeiro APP com navegação de telas </Text>
            </View>
       ) 
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },

    title:{
        fontSize:30,
        color: "#fff",
        fontWeight:"bold",
    
    }
})