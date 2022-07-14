import React, { useState } from "react";
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import styles from './Input.styles';

const Input = ({ submitHandler }) => {


    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <TextInput
                    style={styles.todo}
                    placeholder="To Do"
                    onChangeText={setText}
                    value={text}
                />
            </View>
            <TouchableOpacity
                disabled={(!text ? true : false)}
                style={styles.save_button}
                onPress={() => {
                    submitHandler(text),
                        setText('')
                }}  >
                <Text style={styles.save}>+</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Input;