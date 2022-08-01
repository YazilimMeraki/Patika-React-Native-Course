import React from "react";
import { View, Text , Image, TouchableWithoutFeedback} from "react-native";
import styles from './ProductCard.styles'

const ProductCard = ({product, onSelect}) =>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image
                style={styles.image} 
                source={{uri:product.image}}/>
                <View style={styles.body_container}>
                    <Text style={styles.product_title}>{product.title}</Text>
                    <Text style={styles.product_price}>{product.price} $</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard;