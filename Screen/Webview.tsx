import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import WebView from "react-native-webview";
import * as Progress from "react-native-progress";
import { AdMobBanner } from "expo-ads-admob";
import { Header } from "@react-navigation/stack";

const Webview = ({ route }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  return (
    // <View>

    <View style={{ flex: 1 }}>
      <>
        {!isLoaded ? (
          <Progress.Bar
            progress={progress}
            width={null}
            borderWidth={0}
            borderRadius={0}
            color="orange"
          />
        ) : null}
        <WebView
          source={{ uri: route.params.url }}
          //progress bar goaway
          onLoadEnd={() => setLoaded(true)}
          //progress bar
          onLoadProgress={({ nativeEvent }) =>
            setProgress(nativeEvent.progress)
          }
        />

        <View style={styles.adMob}>
          {/* Display a banner */}
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
          />
        </View>
      </>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  adMob: {
    flex: 1,
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.5,
    height: 60,
    width: "100%",
    bottom: 0,
    alignItems: "center",
    // justifyContent: "center",
    borderWidth: 1,
    overflow: "hidden",
  },
});

export default Webview;
