import { StyleSheet,Dimensions } from "react-native";

const Device = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
    },
    inner_container:{
        marginTop:15,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
    },
    image:{ 
        width:Device.height/5,
        height:Device.width/5,
        resizeMode:'contain',
        backgroundColor:'white',
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50
    },
    title:{
        fontWeight:'900',
        fontSize:24,
        marginLeft:Device.width/10,
        color:'black'
    }
})