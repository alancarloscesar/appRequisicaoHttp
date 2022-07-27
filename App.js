import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator, View, FlatList } from 'react-native';

import api from './src/services/api';
import Filmes from './src/Filmes';

export default function App() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');

      setFilmes(response.data);

      setLoading(false);
    }
    loadFilmes();
  },[])


  if(loading){
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator color='#4e342e' size={100} />
      </View>
    );
  } else{
    return (
      <View style={styles.container}>
        <FlatList
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Filmes data={item} /> }
        />
      </View>
    );
  }



}

const styles = StyleSheet.create({
  
});
