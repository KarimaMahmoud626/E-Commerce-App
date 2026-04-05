import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeFreeSolid } from "@react-native-vector-icons/fontawesome-free-solid";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { COLORS } from "../constants/colors";

export default function SearchBar({ placeholder, onChangeText, value }) {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 8 }}>
        <FontAwesomeFreeSolid
          name="search"
          size={styles.icon.size}
          color={styles.icon.color}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: COLORS.OUTLINE,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15,
    backgroundColor: COLORS.SURFACE,
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  icon: { size: 18 },
  input: { flex: 1, padding: 10 },
});
