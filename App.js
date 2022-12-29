import { useState } from "react";
import { ImageBackground, StyleSheet, View, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}/>;
  }

  return (
    <View style={styles.appContainer}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: "#FDC830",
  },
  backgroundImage: {
    opacity: 0.75,
  },
});
