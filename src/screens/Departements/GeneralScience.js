import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { WebView } from 'react-native-webview';

const GSEScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://sinhgadsolapur.org/EdSite/general-science-department/' }}
        style={styles.webView}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
export default GSEScreen;