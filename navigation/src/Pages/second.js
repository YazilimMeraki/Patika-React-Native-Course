import React from "react";
import { Text,View,SafeAreaView,StyleSheet, Button } from "react-native";

function Second( {navigation} ){
    function backking(){
        navigation.goBack
    }

    return(
            <View style={styles.container}>
                <Text style={styles.text}>Hello Second Pages</Text>
                <Button title="Go Back" onPress={backking} />

            </View>
    )
}

export default Second;

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