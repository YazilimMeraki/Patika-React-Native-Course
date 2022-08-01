import React from "react";
import { View, Text, TouchableWithoutFeedback, Image, ImageBackground } from "react-native";
import styles from './MealCard.styles'
const MealCard = ({ onSelect, meal }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: meal.strMealThumb }} />
                    <View style={styles.contentBody}>

                        <Text style={styles.text} >{meal.strMeal}</Text>

                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealCard;