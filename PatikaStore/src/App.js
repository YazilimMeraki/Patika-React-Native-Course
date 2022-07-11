import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from './component/cards';
import store_items from './component/product.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header_text}>Tech Store</Text>
      </View>
      <View>
        <TextInput style={styles.search_container} placeholder="Ara..." />
      </View>

      <FlatList
        keyExtractor={item => item.id}
        numColumns={2}
        data={store_items}
        renderItem={({item}) => <Card card={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adadad',
    margin: 10,
  },
  header_text: {
    color: '#00007a',
    fontSize: 40,
    fontWeight:"900",
    textAlign: 'center',
    fontFamily:'lucida grande'
  },
  search_container: {
    backgroundColor: 'lightgray',
    margin: 10,
    borderRadius: 20,
  },
});

export default App;