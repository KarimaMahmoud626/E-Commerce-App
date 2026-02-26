import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CustomButton({ title, onPress, icon }) {
  return (
    <LinearGradient
      colors={["#1491D8", "#0FBCCB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.button}
    >
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.container}>
          {icon && <Image source={icon} style={styles.icon} />}
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 6,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#14C6CB",
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 15,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 22 },
  container: { flexDirection: "row", alignItems: "center" },
  icon: { width: 20, height: 20, marginRight: 10 },
});
