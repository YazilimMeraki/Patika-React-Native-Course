import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from './CatagoryCard.style'

const CategoryCard = ({category, onselect}) =>{
    return(
        
            <TouchableWithoutFeedback onPress={onselect} >
                <View style={styles.container}> 
                    <View style={styles.inner_container}>
                    <Image 
                    style={styles.image}
                    source={{uri: category.strCategoryThumb}}
                    />
                    <Text style={styles.title}>{category.strCategory}</Text>
                    </View>
                   
                </View>
            </TouchableWithoutFeedback>
        
    )
}
export default CategoryCard;