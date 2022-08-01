import React from "react";
import { FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import MealCard from "../../components/MealCard";
import Config from 'react-native-config';

const Meals= ({route, navigation})=>{

    const {strCategory} = route.params;

    const {error, loading, data} = useFetch(`${Config.API_MEALS}${strCategory}`)

    const handleMealSelect = idMeal  =>{
        navigation.navigate('Detail' , {idMeal})
    }

    const renderMeals = ({item}) =>  <MealCard meal={item}  onSelect={()=> handleMealSelect(item.idMeal)} />
   
    if(loading) return <Loading/>
    if(error) return <Error/>
    
    return <FlatList data={data.meals} renderItem={renderMeals} />
}

export default Meals;