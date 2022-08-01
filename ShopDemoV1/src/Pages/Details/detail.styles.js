import {StyleSheet,Dimensions} from 'react-native'

const deviceSice = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
    },
    inner_container:{
        marginTop:15,
        padding:20,
    },
    image:{
        width:deviceSice.width,
        height:deviceSice.height/3,
        resizeMode:'contain',
        backgroundColor:'white',
      
    },
    title:{
        fontSize:18,
        marginTop:15,
        fontWeight:'bold',

    },
    decription:{
        fontStyle:'italic',
        marginVertical:15
    },
    price:{
        fontWeight:'bold',
        fontSize:22,
        textAlign:'right'
    },
    buttons:{
        borderRadius:15,
        padding:15,
        margin:15,
        backgroundColor:'green',
    },
    button_Text:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})