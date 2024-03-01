import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { WebView } from 'react-native-webview';
const CSEScreen = () => {
  return (
      <View style={styles.container}>
      <WebView
        source={{ uri: 'http://sinhgadsolapur.org/EdSite/computer-science-and-engineering/' }}
        style={styles.webView}
       
        />
    </View>);};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
export default CSEScreen;