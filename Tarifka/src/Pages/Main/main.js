import React from "react";
import {FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import Config from 'react-native-config'
import CatagoryCard from "../../components/CatagoryCard";
import Loading from './../../components/Loading'
import Error from './../../components/Error'

const Main = ({navigation}) =>{

    const {error, loading, data} = useFetch(Config.API_CATEGORIES)

    const handleCatagorySelect = strCategory  =>{
        navigation.navigate('Meals' , {strCategory})
    }

    const renderCatagory = ({item}) =>  <CatagoryCard category={item}  onselect={()=> handleCatagorySelect(item.strCategory)} />
   
    if(loading) return <Loading/>
    if(error) return <Error/>
    
    return <FlatList data={data.categories} renderItem={renderCatagory} />
    
}
export default Main;