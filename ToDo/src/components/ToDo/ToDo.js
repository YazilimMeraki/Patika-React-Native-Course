import React from "react";
import { Text, View, SafeAreaView, Image,TextInput, TouchableOpacity } from "react-native";
import styles from './ToDo.styles';

const ToDo = ({item, pressHandler,d_todos}) =>{
    
    

    return(
    
    <View  style={styles.container} onPress={() => pressHandler(item.id)}>
            <Text style={styles.todo}>{item.content}</Text>
            <TouchableOpacity style={styles.button} onPress={d_todos}>
                <Text style={styles.delete}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToDo;