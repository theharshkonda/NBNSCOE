import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList,BackHandler } from 'react-native';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Pinchable from 'react-native-pinchable'; // Import the Pinchable component
// Sample event dat
const CampusGallery = () => {
  const data = [
   {
    id:1,
    description:'Bus Facility',
    uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Bus-Facility-1024x681.jpg',
   },
   {
    id:2,
    description:'Bus Facility',
    uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Bus-1024x683.jpg',
   },

   {
   id:3,
    description:'Library',
    uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Lib1-1024x681.jpg',
   },
   {
    id:4,
     description:'Library',
     uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Lib3-1024x681.jpg',
    },
    {
        id:5,
         description:'Library',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Lib4-1024x681.jpg',
    },
    {
        id:6,
         description:'Hostel',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/h1.jpg',
    },
    {
        id:7,
         description:'Mess',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Mess-1024x681.jpg',
    },
    {
         id:8,
         description:'Store',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Store-1024x681.jpg',
    },
    {
        id:9,
        description:'Gymnasium',
        uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/10/gym2-1024x681.jpg',
    },
    {
        id:10,
         description:'Gym',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/10/gym1-1024x681.jpg',
    },
    {
         id:11,
         description:'Sports Ground',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/10/Athelete-Track.jpg',
    },
    {
        id:12,
        description:'Sports Facilities',
        uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/10/Sports.jpg',
    },
    {
        id:13,
        description:'Sports Ground',
        uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/10/Cricket-Ground.jpg',
   },

  ];
  const navigation = useNavigation();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.navigate(ROUTES.GALLERY);
      return true; 
    });
    return () => backHandler.remove(); // Clean up the event listener on unmount
  }, [navigation]);

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10, padding: 10, backgroundColor: '#fff', borderRadius: 15, elevation: 4 }}>
      <Text style={{ fontSize: 17,margin:5,fontWeight:'bold', color: '#000' }}>
        {item.description}
      </Text>
      <Pinchable style={{ width: '100%', height: 270 }}>
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 10 }}
          source={{ uri: item.uri }}
        />
      </Pinchable>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    paddingVertical: 10,
    paddingBottom: 35,
  },
});

export default CampusGallery;
