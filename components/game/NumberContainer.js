import {View, Text, StyleSheet} from 'react-native'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 24,
    margin: 24,
    marginTop: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',

  },
  numberText: {
    color: 'white',
    fontSize: 46,
    fontWeight: 'bold',
  }
});
