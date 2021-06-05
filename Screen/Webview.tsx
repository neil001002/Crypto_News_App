import React from "react";
import { View, Text } from "react-native";
import WebView from "react-native-webview";

const Webview = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: route.params.url }} />

      <View
        style={{
          position: "absolute",
          backgroundColor: "red",
          opacity: 0.5,
          height: 60,
          width: "100%",
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textDecorationLine: "underline",
          }}
        >
          This is the place holder to show ads
        </Text>
      </View>
    </View>
  );
};

export default Webview;
