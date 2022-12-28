import { Button, StyleSheet, TextInput, View } from "react-native";

function StartGameScreen() {
  return(
    <View style={styles.container}>
      <TextInput placeholder="Write number here..." />
      <View>
        <Button title='reset'/>
        <Button title='confirm'/>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});