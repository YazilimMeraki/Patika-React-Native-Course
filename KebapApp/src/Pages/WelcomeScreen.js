import React from "react";
import { SafeAreaView, Text,StyleSheet } from "react-native";
import Button from "./Components/Button";

function WelcomePage({navigation}){

    function goToMemberSing(){
        navigation.navigate('MemberSingScreen')
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Limon Fitness Center</Text>
            <Button text="Sing In" onPress={null}/>
            <Button text="Sing Up" onPress={goToMemberSing}/>
        </SafeAreaView>
    )
}

export default WelcomePage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    },
    header:{
        textAlign:"center",
        margin:10,
        fontSize:30,
        fontWeight:"bold",
    }
})