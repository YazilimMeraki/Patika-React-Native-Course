import React from "react";
import { Text, View,Image, Button, TouchableOpacity } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import styles from './detail.styles';
import Loading from '../../components/Loading/Loading'
import Error from "../../components/Error/Error";


const Detail = ({route}) => {
    const {id}  = route.params;
    const {loading, error,data} =useFetch(`${Config.API_URL}/${id}`)

    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }

    return(
        <View style={styles.container}>
            <Image source={{uri:data.image}} style={styles.image} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price} $</Text>
                <TouchableOpacity style={styles.buttons}>
                     <Text style={styles.button_Text}>Buy</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Detail;