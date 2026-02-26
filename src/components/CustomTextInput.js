import { View, TextInput, Image, StyleSheet } from "react-native";

export default function CustomTextInput({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  value,
  icon,
  postIcon,
  postIconPress,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
      />

      {postIcon && (
        <Image
          source={postIcon}
          style={styles.icon}
          onTouchStart={postIconPress}
        />
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
    shadowColor: "#14C6CB",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15,
    backgroundColor: "#fff",
    height: 50,
    paddingHorizontal: 10,
  },
  icon: { width: 20, height: 20, margin: 10, fillMode: "contain" },
  input: { flex: 1, padding: 10 },
});
