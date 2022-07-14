
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Switch,
  Button,
} from 'react-native';

const data = [
  { id: 0, name: 'cafe.exe', isFavorite: true },
  { id: 1, name: 'KafaKafe', isFavorite: false },
  { id: 2, name: 'BugG', isFavorite: false },
  { id: 3, name: 'Rock`n Code', isFavorite: true },
  { id: 4, name: 'do(drink)', isFavorite: false },
  { id: 5, name: 'esc', isFavorite: false },
]


function App() {

  const [cafeList, setCafeList] = useState(data)
  const [showOnlyFavorite, setShowOnlyFavorite] = useState(false)

  function onFavoriteChanges(isFavoriteSelected){
    setShowOnlyFavorite(isFavoriteSelected)
    isFavoriteSelected 
      ?setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      :setCafeList(data);

  }

  return (
    <SafeAreaView>
      <View style={{margin:10, alignItems:"center"}}>
        <Text style={{fontSize:40}}>Show Only Favorite  </Text>
        <Switch value={showOnlyFavorite} onValueChange={onFavoriteChanges}/>
      </View>
      
      <FlatList
        data={cafeList}
        renderItem={({ item }) => <Text style={{fontSize:25}}> {item.name} </Text>}
      />
    </SafeAreaView>
  );
};


export default App;
