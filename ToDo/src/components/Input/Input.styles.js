import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#303030",
        borderRadius:15,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        margin:5
    },
    inner_container:{
        flex:2,
        backgroundColor:"white",
        borderRadius:15,
        margin:15,
        flexDirection:"row",
        
    },
    todo:{
        flex:1,
        padding:5,
        margin:5,
        borderRadius:15,
    },
    save_button:{
        backgroundColor:"green",
        borderRadius:50,
        fontWeight:"bold",
        width:50,
        height:50,
        alignItems:"center",
        margin:10
        
        
    },
    save:{
        color:"white",
        fontSize:35,
    },
})