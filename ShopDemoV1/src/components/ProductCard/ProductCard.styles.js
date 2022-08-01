import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#e0e0e0',
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:10,
        flexDirection:"row"
    },  
    body_container:{
        flex:1,
        padding:5, 
        justifyContent:'space-between'
    },
    image:{
        backgroundColor:'white',
        resizeMode:'contain',
        width:100,
        minHeight:100
    },
    product_title:{
        fontWeight:'bold',
        fontSize:18
    },
    product_price:{
        fontSize:16,
        fontStyle:'italic',
       textAlign:'right'
    }
})