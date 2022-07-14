import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import styles from './SongCard.styles';

const SongCard = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.song.imageUrl }} />

            <View style={styles.inner_container} >
                <Text style={styles.title}>{props.song.title}</Text>

                <View style={styles.content}>

                    <View style={styles.info_container}>
                        <Text style={styles.name}>{props.song.artist}</Text>
                        <Text style={styles.year}>{props.song.year}</Text>
                    </View>

                    {props.song.isSoldOut && (
                        <View style={styles.sold_out}>
                            <Text style={styles.sold_out_title}>Sold out</Text>
                        </View>)
                    }
                </View>


            </View>

        </View>
    )
}

export default SongCard;