import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

function StartGameScreen({onPickNumber}) {

  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText)
  }

  const resetInputHandler = () => {
    setEnteredNumber('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid nymber!', 'Number has be a number between 1 and 99.', [{text: 'Ok', style: 'destructive', onPress: resetInputHandler}])
      return
    }
    onPickNumber(chosenNumber)
    console.log('Valid Number!!!');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#f2cc9a",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 80,
    width: 80,
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    borderColor: "white",
    padding: 8,
    borderWidth: 2,
    marginVertical: 18,
    textAlign: "center",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
