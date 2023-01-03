import { StyleSheet, View, Image, Text } from "react-native";

import Title from "../components/ui/Title";

import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/over.png")}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text> .
        </Text>
      </View>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",

  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 24,
    padding: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black'
  },
  summaryText: {

    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  highlight: {
    fontWeight: "bold",
  },

});
