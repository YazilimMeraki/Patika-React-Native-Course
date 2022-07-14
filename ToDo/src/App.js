import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet ,FlatList} from "react-native";
import Input from "./components/Input";
import ToDo from "./components/ToDo";

function App() {

    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([
    ]);

    const todoRenders = ({ item }) => (
        <ToDo pressHandler={pressHandler} item={item} d_todos={delete_todo} />
    );

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((item) => item.id != key);
        });
    };

    useEffect(() => {
        const length = todos.length;
        setCounter(length);
    }, [todos]);

    const submitHandler = (text) => {
        setTodos((prevTodos) => {
            return [{ id: Math.random().toString(), content: text }, ...prevTodos];
        });
    };

    const delete_todo = ()=>{
        setCounter(counter - 1)
        setTodos((todos) => todos.filter((_, index) => index !== 0));

        
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.circle1}/>
            <View style={styles.circle2}/>
            <View style={styles.circle3}/>


            <View style={styles.inner_container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>Things To Do</Text>
                    <Text style={styles.count}> {counter}</Text>
                </View>

                <View style={styles.todos_container}>
                    <FlatList
                        data={todos}
                        keyExtractor={todos.id}
                        renderItem={todoRenders}
                    />
                </View>
            </View>


            <View >
                <Input submitHandler={submitHandler}/>
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#737373",
        flexDirection: "column",
    },
    inner_container: {
        flex: 1,
        justifyContent: "flex-start"
    },
    count: {
        fontSize: 20,
        padding: 10,
        fontSize: 40
    },
    todos_container: {

    },
    title: {
        padding: 10,
        alignItems: "center",
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 40,
        color: "black"
    },
    title_container: {
        justifyContent: "space-between",
        flexDirection: "row",

    },
    circle1:{
        position:"absolute",
        width:300,
        height:300,
        backgroundColor:"red",
       borderRadius:300,
       margin:-100
    },
    circle2:{
        position:"absolute",
        width:300,
        height:300,
        backgroundColor:"blue",
       borderRadius:300,
       marginTop:200,
       marginLeft:190
    },
    circle3:{
        position:"absolute",
        width:300,
        height:300,
        backgroundColor:"pink",
       borderRadius:300,
       marginTop:400,
       marginStart:-100
       
    }

})