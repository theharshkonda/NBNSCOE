import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList,BackHandler } from 'react-native';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Pinchable from 'react-native-pinchable'; // Import the Pinchable component
// Sample event dat
const CivilGallery = () => {
  const data = [
    {
     id:1,
     description:'Geotechnical Engineering Lab ',
     uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/RV3A1249.jpg',
    },
    {
     id:2,
     description:'Testing of Material Lab ',
     uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/RV3A1250.jpg',
    },
 
    {
    id:3,
     description:'Transportation Engg Lab ',
     uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/RV3A1257.jpg',
    },
    {
     id:4,
      description:'Engg Geology Lab ',
      uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/RV3A1264.jpg',
     },
     {
         id:5,
          description:'Environmental Engg Lab ',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/RV3A1268.jpg',
     },
     {
         id:6,
          description:'Computer Lab',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/RV3A1272.jpg',
     },
     {
         id:7,
          description:'Fluid Mechanics Lab ',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/RV3A1276.jpg',
     },
     {
          id:8,
          description:'Concrete Technology Lab ',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/RV3A1280.jpg',
     },
     {
         id:9,
         description:'Surveying Lab ',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Basic-Civil-Engineering.jpg',
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
 
export default CivilGallery;
