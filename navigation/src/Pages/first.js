import React from "react";
import { Text,View,SafeAreaView,StyleSheet, Button } from "react-native";
import Second from "./second";

function First(props){
    console.log(props)
    function navigatePage(){
        props.navigation.navigate(Second)
        
    }


    return(
            <View style={styles.container}>
                <Text style={styles.text} >Hello First Pages</Text>
                <Button title="Go to Second" onPress={navigatePage}/>
            </View>
    )
}

export default First;

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    text:{
        fontSize:40,
        fontWeight:"bold",
        color:"red"
    }
})