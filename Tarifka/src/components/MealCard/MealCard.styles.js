import { StyleSheet, Dimensions } from "react-native";

const Device = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange'
    },
    innerContainer:{
        padding:15,
        
    },
    contentBody:{
        backgroundColor: 'black',
        borderBottomEndRadius:20,borderBottomStartRadius:20 
        
    },
    image:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        resizeMode:'cover',
        height:Device.height/3,
        
    },
    text:{
        textAlign:'center',
        fontSize:25,
        color:'white',
        fontWeight:'bold',
    }
})

