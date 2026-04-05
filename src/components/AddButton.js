import { View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { COLORS } from "../constants/colors";

export default function AddButton({ color, isPressed, style, onPress }) {
  return (
    <View style={[styles.button, { backgroundColor: color }, style]}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={isPressed ? "checkmark" : "add"} size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    height: 60,
  },
});
