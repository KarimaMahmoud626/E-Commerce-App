import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [isHide, setIsHide] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your Credentials</Text>

      <CustomTextInput
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(email) => setEmail(email)}
        value={email}
        icon={require("../../../assets/email-icon.jpg")}
      />

      <CustomTextInput
        placeholder="Password"
        secureTextEntry={isHide}
        onChangeText={(password) => setPassword(password)}
        value={password}
        icon={require("../../../assets/lock.png")}
        postIconPress={() => {
          setIsHide(!isHide);
        }}
        postIcon={
          isHide
            ? require("../../../assets/eye-password-hide.png")
            : require("../../../assets/eye-password-show.png")
        }
      />

      <CustomButton title="Login" onPress={() => navigation.navigate("Home")} />

      <Text style={styles.text}>--- Or ---</Text>

      <CustomButton
        title="Login with Google"
        onPress={() => navigation.navigate("Home")}
        icon={require("../../../assets/google_icon.png")}
      />

      <Text style={styles.text}>
        If you do not have an account,{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  text: { marginVertical: 10, textAlign: "center" },
  link: { color: "#14C6CB", fontWeight: "bold" },
});
