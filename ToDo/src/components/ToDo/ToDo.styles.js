import { StyleSheet } from "react-native";

export default StyleSheet.create({
   container:{
    flexDirection:"row",
    backgroundColor:"#2e6e26",
    padding:15,
    margin:5,
    borderRadius:15,
    justifyContent:"space-between",
    alignItems:"center",
   },
   todo:{
    color:"white",
    fontSize:18,
   },
   button:{
    width:30,
    height:30,
    borderRadius:50,
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
   },
   delete:{
    fontSize:20,
    fontWeight:"bold",
    color:"white"
   }
})