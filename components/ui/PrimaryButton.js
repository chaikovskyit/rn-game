import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children, onPress }) => {

  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#f2cc9a',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  pressed: {
    opacity: 0.75
  },


});
