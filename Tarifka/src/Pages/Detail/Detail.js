import React from "react";
import { FlatList,Linking } from "react-native";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Config from 'react-native-config';
import DetailCard from "../../components/DetailCard";
import styles from './Detail.styles'
const Meals = ({ route }) => {

  const {idMeal} = route.params;

  const {data, loading, error} = useFetch(`${Config.API_DETAIL}${idMeal}`);

  const renderDetail = ({item}) => (
    <DetailCard
      detail={item}
      onSelect={() => Linking.openURL(item.strYoutube)}
    />
  );



  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <FlatList data={data.meals} renderItem={renderDetail} />
  )
}

export default Meals;