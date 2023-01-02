import { StyleSheet, Text, View } from "react-native"

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#f2cc9a",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
