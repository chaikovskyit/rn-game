import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: 'white',
    color: 'white',
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
});
