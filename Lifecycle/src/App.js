import React, { useState, useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';


function App() {

  const [number, setNumber] = useState(0)
  const [helloFlag, setHelloFlag] = useState(true)

  function updateFlag(){
    setHelloFlag(!helloFlag)
  }

  useEffect(() => {
    console.log("number updated " + number)
  }, [number])

  useEffect(()=>{console.log("mounting")},[])

  function updateCounter(){
    console.log("1. State value :" + number)
    setNumber(number + 1)
    console.log("2. State value :" + number)
  }

  return (
    <View >
      <Text>number :{number}</Text>
      <Button title='Update number!' onPress={ updateFlag} />
      {helloFlag && <Hello />}
    </View>
  );
};


export default App;

function Hello(){
  useEffect(()=>{console.log("hello world")
  return()=>{
    console.log("Gitti puf")
  }
},[])
  
  return(
    <View style={{backgroundColor:"pink"}}>
      <Text style={{fontSize:25}}>Hello Im hello compoment</Text>
    </View>  
  )
}