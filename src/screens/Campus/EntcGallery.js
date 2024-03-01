import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList,BackHandler } from 'react-native';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Pinchable from 'react-native-pinchable'; // Import the Pinchable component

const EntcGallery = () => {
    const data = [
        {
         id:1,
         description:'Power Electronics Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Power-Electronics.jpg',
        },
        {
         id:2,
         description:'Electronics Design Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Electronics-Design.jpg',
        },
     
        {
        id:3,
         description:'Analog Electronics Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Analog-Electronic.jpg',
        },
        {
         id:4,
          description:'Communication Lab',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Communication-Lab.jpg',
         },
         {
             id:5,
              description:'PG Research Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/PG-Research-Lab.jpg',
         },
         {
             id:6,
              description:'Signal Processing Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Signal-Processing.jpg',
         },
         {
             id:7,
              description:'Microcontroller Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Microcontroller.jpg',
         },
         {
              id:8,
              description:'Advanced Comm. Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Adv-Comm-Lab.jpg',
         },
         {
             id:9,
             description:'VLSI Lab',
             uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/VLSI-Lab.jpg',
         },
         {
             id:10,
              description:'Digital technique Lab',
              uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Digital-Techniques.jpg',
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

export default EntcGallery;
