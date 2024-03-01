import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList,BackHandler } from 'react-native';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Pinchable from 'react-native-pinchable'; // Import the Pinchable component

const GseGallery = () => {
    const data = [
        {
         id:1,
         description:'Engineering Physics Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/06/ENGG.-PHYSICS-LAB-1.jpg',
        },
        {
         id:2,
         description:'Engineering Chemistry Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/06/ENGG.-CHEMISTRY-LAB.jpg',
        },
     
        {
        id:3,
         description:'Engineering Chemistry Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/06/ENGG.-CHEMISTRY-LAB-2.jpg',
        },
        {
         id:4,
          description:'Basic Mechanical Engineering Lab',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/06/BME-LAB-1.jpg',
         },
         {
             id:5,
              description:'Basic Electrical & Electronics Engineering Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/06/BEEE-LAB-2.jpg',
         },
         {
             id:6,
              description:'Engineering Graphics Drawing Hall',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/06/BME-LAB-2-1.jpg',
         },
         {
             id:7,
              description:'Engineering Mechanics Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/06/ENGG.-MECHANICS-LAB-1.jpg',
         },
         {
              id:8,
              description:'Engineering Mechanics Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/06/ENGG.-MECHANICS-LAB-2.jpg',
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

export default GseGallery;
