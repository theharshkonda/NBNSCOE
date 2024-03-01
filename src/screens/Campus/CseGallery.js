import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList,BackHandler } from 'react-native';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Pinchable from 'react-native-pinchable'; // Import the Pinchable component

const CseGallery = () => {
    const data = [
        {
         id:1,
         description:'Database Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/DB-Lab.jpg',
        },
        {
         id:2,
         description:'Project Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/PL.jpg',
        },
     
        {
        id:3,
         description:'Computer Software Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/CSL.jpg',
        },
        {
         id:4,
          description:'Operating System Lab',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/OSL.jpg',
         },
         {
             id:5,
              description:'Advanced Programming  Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/APL.jpg',
         },
         {
             id:6,
              description:'System Software Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/SSL.jpg',
         },
         {
             id:7,
              description:'Computer Center  Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Computer-Center1.jpg',
         },
         {
              id:8,
              description:'Network Lab & Server Room',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/NW.jpg',
         },
         {
             id:9,
             description:'Hardware Lab',
             uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/HW.jpg',
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

export default CseGallery;
