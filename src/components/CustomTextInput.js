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

export default function CustomTextInput({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  onSubmitEditing,
  value,
  iconName,
  postIcon,
  postIconPress,
  onError,
  title,
  validationMessage,
}) {
  return (
    <View style={{ flexDirection: "column", marginBottom: 25 }}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View
        style={
          onError && validationMessage
            ? [styles.container, { borderColor: "red" }]
            : styles.container
        }
      >
        <View style={{ paddingHorizontal: 8 }}>
          <FontAwesomeFreeSolid
            name={iconName}
            size={styles.icon.size}
            color={styles.icon.color}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={"gray"}
          onSubmitEditing={onSubmitEditing}
        />
        {postIcon && (
          <TouchableOpacity onPress={postIconPress}>
            <Ionicons
              name={postIcon}
              size={styles.icon.size}
              color={styles.icon.color}
            />
          </TouchableOpacity>
        )}
      </View>
      {onError && validationMessage && (
        <Text style={{ color: "red" }}>{validationMessage}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: COLORS.PRIMARY,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15,
    backgroundColor: COLORS.SURFACE,
    height: 50,
    paddingHorizontal: 10,
  },
  onErrorContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: COLORS.ERROR,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15,
    backgroundColor: COLORS.SURFACE,
    height: 50,
    paddingHorizontal: 10,
  },
  icon: { size: 18 },
  input: { flex: 1, padding: 10 },
  title: { fontSize: 18, marginBottom: 5 },
});
