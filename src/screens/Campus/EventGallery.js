import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList,BackHandler } from 'react-native';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Pinchable from 'react-native-pinchable'; // Import the Pinchable component
const EventGallery = () => {
const data = [

   {
      "id":1,
      "description":"Umang Cultural and Sports Event",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/uang1.png"
   },
   {
      "id":2,
      "description":"Traditional Day",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/20230610163356_IMG_0921.JPG"
   },
   {
      "id":3,
      "description":"Sports Event",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/sports1.jpeg"
   },
   {
      "id":4,
      "description":"Sports",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/sports.jpeg"
   },
   {
      "id":5,
      "description":"DISTA Event",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG-20230818-WA0015.jpg"
   },
   {
      "id":7,
      "description":"DISTA Event",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG-20230403-WA0016.jpg"
   },
   {
      "id":8,
      "description":"DISTA Event",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG_9703.JPG"
   },
   {
      "id":9,
      "description":"Prayog Project Competition",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG-20230818-WA0018.jpg"
   },
   {
      "id":10,
      "description":"TECHNOSINH Event",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG-20230818-WA0004.jpg"
   },
   {
      "id":11,
      "description":"TECHNOSINH Event",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG_9689[1].jpg"
   },
   {
      "id":12,
      "description":"TECHNOSINH ",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/Technosinh .jpg"
   },
   {
      "id":13,
      "description":"Debate Competition",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/debate.jpeg"
   },
   {
      "id":14,
      "description":"CORE Commitee",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/Allcore.jpg"
   },
   {
      "id":15,
      "description":"ETOS Commitee",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG_20220915_172010.jpg"
   },
   {
      "id":16,
      "description":"Freshers Party",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG-20230818-WA0007.jpg"
   },
   {
      "id":17,
      "description":"",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG_20230610_184516.jpg"
   },
   {
      "id":18,
      "description":"Quiz Competition",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG_20220228_111631.jpg"
   },
   {
      "id":19,
      "description":"Prayog",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG-20230818-WA0020.jpg"
   },
   {
      "id":20,
      "description":"Student Felicitation for Excellent Performance",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG_20220228_112627.jpg"
   },
   {
      "id":21,
      "description":"Teacher's Day",
      "uri":"https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG_20220905_163925.jpg"
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
export default EventGallery;
