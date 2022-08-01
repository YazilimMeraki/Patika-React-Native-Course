import { StyleSheet,Dimensions } from "react-native";

const getSize = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        height: getSize.height / 3,
      },
      body_container: {
        margin: 5,
      },
      meal_name: {
        textAlign:'center',
        fontSize: 25,
        color: '#f06930',
        fontWeight: 'bold',
      },
      meal_from: {
        textAlign:'center',
        fontSize: 18,
        color: '#f06930',
        fontWeight: '500',
      },
      separator: {
        borderBottomColor: '#D2D2D2',
        borderBottomWidth: 1,
        marginTop: 3,
        marginBottom: 3,
      },
      description: {
        marginLeft: 5,
        marginRight: 5,
        color: 'black',
        textAlign: 'justify',
      },
      button: {
        borderWidth: 2,
        backgroundColor: 'red',
        margin: 6,
        padding: 4,
        height: 40,
        borderColor: 'Blue',
        borderRadius: 6,
      },
      button_text: {
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: '900',
      },
})