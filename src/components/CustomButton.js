import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function CustomButton({ title, onPress, icon, postIcon }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.buttonText}>{title}</Text>
        {postIcon && <Ionicons name={postIcon} size={24} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY,
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: COLORS.OUTLINE,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 15,
  },
  buttonText: { color: COLORS.ON_SURFACE, fontWeight: "bold", fontSize: 22 },
  container: { flexDirection: "row", alignItems: "center" },
  icon: { width: 20, height: 20, marginRight: 10 },
});
