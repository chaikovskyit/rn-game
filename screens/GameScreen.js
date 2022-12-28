import { StyleSheet, Text, View } from "react-native";

function GameScreen() {
  return (
    <View style={styles.gameScreen}>
      <Text style={styles.title}>Oppenent's Guess</Text>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,


  }
});