
import React,{Component} from "react";
import { View,Text,StyleSheet,TouchableOpacity} from "react-native"



export default class home extends Component{
   
    constructor(props){
        super(props)
        this.irsobre = this.irsobre.bind(this)
    }

    irsobre(){
        this.props.navigation.navigate("sobre")
    }

    render(){
        return(
            <View style={styles.container}> 
            
                <Text style={styles.title}> Meu APP </Text>
                <TouchableOpacity style={styles.button} onPress={this.irsobre}>
                    <Text style={styles.title1}> Proxima Tela</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
        
    },

    title:{
        fontSize:30,
        color: "#fff",
        fontWeight:"bold",   
    },

    button:{
        backgroundColor: "#fff",
        padding: 20
    },

    title1:{

        
        fontSize: 10,
        alignItems: "center",
       
    }
})