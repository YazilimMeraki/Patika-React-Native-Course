import React from "react";
import Config from "react-native-config";
import { View ,FlatList,} from "react-native";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loading from '../../components/Loading/Loading'
import Error from "../../components/Error/Error";




const Product = ({navigation}) => {

    const {loading, data, error} = useFetch(Config.API_URL)
    const handleProductSelect = (id) =>{
        navigation.navigate('DetailPage',{id})
    }
    const renderProduct = ({item}) => <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>
    
    
    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }
    return(
        <View>
            <FlatList
            data={data}
            renderItem={renderProduct} />

        </View>
    )
}

export default Product;