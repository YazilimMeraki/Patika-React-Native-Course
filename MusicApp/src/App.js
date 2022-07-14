import React,{useState} from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList } from "react-native"
import music_data from "./music-data.json"
import SongCard from "./components/Songcard";
import SearchBar from "./components/SearchBar";

function App() {
  const [list, setList] = useState(music_data)

  const renderSong = ({item})=> <SongCard song={item} />
  
  const handleSearch = text=> {
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;

    }) ;
    setList(filteredList);
  }

  const renderSeperator = () => <View style={styles.seperator}></View>
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch}/>
        <FlatList 

        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>

  )
}

export default App

const styles  = StyleSheet.create({
  container :{
    flex:1
  },
  seperator:{
    borderWidth:1,
    borderColor:"#e0e0e0"
  }
})