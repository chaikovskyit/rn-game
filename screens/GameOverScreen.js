import { StyleSheet, View} from "react-native";

import Title from "../components/ui/Title";
import { Ionicons } from '@expo/vector-icons'

const GameOverScreen = () => {
  return(
    <View>
      <Title>GAME OVER!</Title>
      <Ionicons name="md-cloud-done-sharp" size={70} color='black'/>
    </View>

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