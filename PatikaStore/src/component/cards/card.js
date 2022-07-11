import React from "react";
import {View,Text, Image} from "react-native"
import styles from './card.styles'

const Card = props => {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={'contain'}
          style={styles.image}
          source={{uri: props.card.imgURL}}
        />
  
        <View>
          <Text style={styles.title}>{props.card.title}</Text>
          <Text style={styles.price}>{props.card.price}</Text>
          {!props.card.inStock && <Text style={styles.inStock}>Stokta Yok</Text>}
        </View>
      </View>
    );
  };
export default Card;