import React from "react";
import { View, Text , StyleSheet} from "react-native";

function MemberResult({route}){
    
    const {user} = route.params;

    return(
        <View>
            <Text style={styles.header}>Success </Text>
            <Text  style={styles.label}> Name : {user.memberName}</Text >
            <Text  style={styles.label}> Surname : {user.memberSurname}</Text >
            <Text  style={styles.label}> Age : {user.memberAge}</Text >
            <Text  style={styles.label}> Email : {user.memberMail}</Text >
            <Text  style={styles.label}> Hometown : {user.memberHometown}</Text >
        </View>
    )
}

export default MemberResult;

const styles = StyleSheet.create({
    label:{
        fontSize:15,
        fontWeight:"bold",
        margin:5
    },
    header:{
        textAlign:"center",
        fontSize:45,
        fontWeight:"bold",
        color:"green"
    }
})