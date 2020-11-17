import { preventAutoHide } from "expo/build/launch/SplashScreen";
import React from "react";
import { View, Text } from "react-native";

const App = () => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7ce0f9",
      }}
    >
      <Text>
        Hello World!
      </Text>
    </View>
  )
}
export default App;
