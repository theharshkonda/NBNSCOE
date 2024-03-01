import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList,BackHandler } from 'react-native';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Pinchable from 'react-native-pinchable'; // Import the Pinchable component

const ElectGallery = () => {
    const data = [
        {
         id:1,
         description:'Electrical Measurement and Instrumentation Lab ',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/2.1-Electrical-Measurement-and-Instrumentation-Lab.jpg',
        },
        {
         id:2,
         description:'Switchgear and Protection Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/2.2-Switchgear-and-Protection-Lab.jpg',
        },
     
        {
        id:3,
         description:'Electrical Machines –I Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/2.3-Electrical-Machines.png',
        },
        {
         id:4,
          description:'Electrical Machines –II Lab',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/2.4-Electrical-Machines.png',
         },
         {
             id:5,
              description:'Project Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/2.6-Project-Lab.jpg',
         },
         {
             id:6,
              description:'Control System Lab ',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/2.7-Control-System-Lab.jpg',
         },
         {
             id:7,
              description:'Computer Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/2.5-Computer-Lab.jpg',
         },
         {
              id:8,
              description:'Power Electronics and Electrical Drives Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/2.8-Power-Electronics-and-Electrical-Drives-Lab.jpg',
         },
         {
             id:9,
             description:'Analog and digital Electronics Lab',
             uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2018/08/2.9-Analog-and-digital-Electronics-Lab.jpg',
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

export default ElectGallery;
