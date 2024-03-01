import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import eventData from './Eventdata';
import { COLORS, IMGS } from '../../constants';
import Pinchable from 'react-native-pinchable'; // Import the Pinchable component
// Sample event dat
const EventScreen = () => {
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10, padding: 10, backgroundColor: '#fff', borderRadius: 15, elevation: 4 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderColor: 'red',
            borderWidth: 1,
            borderRadius: 80,
          }}
          source={IMGS.user}
          resizeMode={'center'}
        />
        <View style={{ marginLeft: 16 }}>
          <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>NBNSCOE, Solapur</Text>
        </View>
      </View>
      <Text style={{ fontSize: 15,marginLeft:5, marginVertical:0, marginBottom:5, color: '#000' }}>
        {item.description}
      </Text>
      <Pinchable style={{ width: '100%', height: 270, borderRadius: 0 }}>
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 10 }}
          source={{ uri: item.uri }}
        />
      </Pinchable>
    </View>
  );

  return (
    <FlatList
      data={eventData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 3,
    paddingVertical: 10,
    paddingBottom: 35,
  },
});

export default EventScreen;
