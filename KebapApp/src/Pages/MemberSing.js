import React, { useState } from "react";
import { View,Alert } from "react-native";
import Button from "./Components/Button";
import Input from "./Components/Input";

function MemberSing({navigation}){

    function handleSubmit(){

        if( !memberName || !memberSurname ||!memberAge || !memberMail ||!memberHometown){
            Alert.alert('Limon fitness center','Cant be null inbox')
            return
        }

        const user ={
            memberName,
            memberSurname,
            memberAge,
            memberMail,
            memberHometown
        }
        
        navigation.navigate("MemberResultScreen", {user})
    }

    const [memberName, setMemberName] = useState(null)
    const [memberSurname, setMemberSurname] = useState(null)
    const [memberAge, setMemberAge] = useState(null)
    const [memberMail, setMemberMail] = useState(null)
    const [memberHometown, setMemberHometown] = useState(null)

    return(
        <View>
            <Input label="Member Name" placeholder="Name..." onChangeText={setMemberName}/>
            <Input label="Member Surname" placeholder="Surname..." onChangeText={setMemberSurname}/>
            <Input label="Member Age" placeholder="Age..." onChangeText={setMemberAge}/>
            <Input label="Member eMail" placeholder="eMail..." onChangeText={setMemberMail}/>
            <Input label="Member Hometown" placeholder="City..." onChangeText={setMemberHometown}/>
            <Button  text="Sing Up" onPress={handleSubmit}/>
        </View>
    )
}

export default MemberSing;