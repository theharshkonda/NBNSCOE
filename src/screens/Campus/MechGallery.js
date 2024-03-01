import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList,BackHandler } from 'react-native';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Pinchable from 'react-native-pinchable'; // Import the Pinchable component

const MechGallery = () => {
  const data = [
    {
     id:1,
     description:'Automatic Control Engineering Lab',
     uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Automatic-Control-engg.jpg',
    },
    {
     id:2,
     description:'Apllied Thermodynamics Lab',
     uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Applied-thermodynamics.jpg',
    },
    {
    id:3,
     description:'Advanced Computer Programming Lab',
     uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Advanced-computational-program.jpg',
    },
    {
     id:4,
      description:'Automoblie Engineering Lab',
      uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/automobile-engg.jpg',
     },
     {
         id:5,
          description:'Fluid Machinery & Fluid Power Lab',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/fluid-machinery.jpg',
     },
     {
         id:6,
          description:'Internal Combustion Engines Lab',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/ic-engine-lab.jpg',
     },
     {
         id:7,
          description:'CAD/CAM Lab',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/RV3A1174.jpg',
     },
     {
          id:8,
          description:'Heat Transfer Lab',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/heat-n-mass-transfer.jpg',
     },
     {
         id:9,
         description:'Refrigeration & Air Conditioning Lab',
         uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/refrigeration.jpg',
     },
     {
         id:10,
          description:'Theory of Machines Lab',
          uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/theory-of-machine.jpg',
     },
     {
      id:11,
      description:'Metrology & Mechanical Measurements',
      uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/metrology-n-mech-measurement.jpg',
 },
 {
     id:12,
     description:'Metallurgy Lab',
     uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/metallurgy.jpg',
 },
 {
     id:13,
      description:'Machine Drawing & Computer Graphics',
      uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Machine-drawing.jpg',
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

export default MechGallery;
