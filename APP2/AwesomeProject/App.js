import React,{Component} from "react";
import { View, Text } from "react-native";

import { NavigationContainer, StackActions,} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from "./src/pages/home";
import sobre from "./src/pages/sobre";

        
const Stack = createNativeStackNavigator();

export default class App extends Component{

    render(){
        return (
            
            <NavigationContainer>
              <Stack.Navigator>
                    <Stack.Screen name="home" component={home} />
                    <Stack.Screen name="sobre" component={sobre}/>
              </Stack.Navigator>
            </NavigationContainer>
          );
        }
    }

