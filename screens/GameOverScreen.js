import { StyleSheet} from "react-native";
import InstructionText from "../components/ui/InstructionText";

const GameOverScreen = () => {
  return(
    <InstructionText>Game is over</InstructionText>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});