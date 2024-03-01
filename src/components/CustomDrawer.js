import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,Text,
  View,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, IMGS} from '../constants';

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMGS.bgPattern} style={{height: 170, marginTop:-10}}>
        <Image source={IMGS.user} style={styles.userImg} />
        
      </ImageBackground>
      <Text style={{textAlign:'center', marginTop:60, fontWeight:'bold',fontSize:21}}>NBNSCOE</Text>
      <Text style={{textAlign:'center', marginTop:5, fontWeight:'bold',fontSize:18}}>Solapur</Text>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
        
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 120,
    height: 145,
    borderRadius:17,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 10,
  },
});
