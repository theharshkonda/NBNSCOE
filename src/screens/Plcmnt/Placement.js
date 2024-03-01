import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,View,Image,FlatList
} from 'react-native';
import data from './data';
const PlacementScreen = () => {

  const [imageData, setImageData] = useState([]);
  const apiUrl = 'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/api.json';

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch(apiUrl)
      .then((response) => response.json())
      .then((comp) => {
        // Set the fetched data to the state
        setImageData(comp);
      })
      .catch((error) => {
        <View><Text>No Internet Connection</Text></View>
      });
  }, []);

  const render = ({ item }) => (
    <View style={styles.compContainer}>
      <Image
        source={{ uri: item.uri }}
        style={{ height: 40, width: 80, resizeMode:'contain' }}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <View style={styles.textView}>
          <Text style={styles.title}>Top companies where our students are placed </Text>
    <FlatList
      data={imageData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={render}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      contentContainerStyle={styles.companylist}
    />
        <Text style={styles.titleText}>Our Placed Students</Text>
        </View>
      )}
      renderItem={({ item }) => {
        return <RenderItem item={item} />;
      }}
      numColumns={2}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};
const RenderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.uri }}
        sharedTransitionTag={`image${item.id}${item.name}`}
        style={{ height: 140, width: '100%', resizeMode:'contain' }}
      />
      <View style={{ height: 2 }} />
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.emailText}>{item.company}</Text>
      <Text style={styles.star}>{item.year}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    height: 210,
    width: 155,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  nameText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  emailText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8841f2',
  },
  star: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  textView: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center',
    borderBlockColor:'#000',
    borderBlockEndColor:'#000',
  },
  titleText: {
    textAlign:'center',
    fontSize: 30,
    fontWeight: '700',
    marginBottom:5,
    color: '#000',
  },
  title: {
    textAlign:'center',
    fontSize: 25,
    fontWeight: '600',
    marginBottom:5,
    color: '#000',
  },
  flatListContainer: {
    flexDirection: 'column',
    paddingBottom:40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
  },
  companylist:{
    padding:10
  },
 compContainer:{
  margin: 6,
  backgroundColor: '#fff',
  height: 45,
  width: 115,
  alignItems: 'center',
  borderRadius: 10,
  elevation: 7,
  overflow: 'hidden',
  marginBottom: 10
 },

});

export default PlacementScreen;
