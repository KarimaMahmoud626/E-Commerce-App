import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const [isHide, setIsHide] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Sign Up</Text>

        <CustomTextInput
          placeholder="e-mail"
          keyboardType="email-address"
          onChangeText={(email) => setEmail(email)}
          value={email}
          icon={require("../../../assets/email-icon.jpg")}
        />

        <CustomTextInput
          placeholder="password"
          keyboardType={"password"}
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

        <CustomTextInput
          placeholder=" repeat password"
          keyboardType={"password"}
          secureTextEntry={isHide}
          onChangeText={(rPassword) => {
            if (password !== rPassword) {
              setPasswordError(true);
            } else {
              setPasswordError(false);
            }
            setRPassword(rPassword);
          }}
          value={rPassword}
          icon={require("../../../assets/lock.png")}
          postIconPress={() => {
            setIsHide(!isHide);
          }}
          postIcon={
            isHide
              ? require("../../../assets/eye-password-hide.png")
              : require("../../../assets/eye-password-show.png")
          }
          onError={passwordError}
        />

        <View style={styles.sizedBox}></View>

        <CustomButton title="Sign Up" />

        <Text style={styles.text}> Read User Liscense Agreement</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "flex-start",
    backgroundColor: "#F7F9FD",
  },
  headerText: {
    alignSelf: "center",
    fontSize: 54,
    color: "#14C6CB",
    fontWeight: "bold",
    marginVertical: 60,
  },
  sizedBox: { flex: 1 },
  text: {
    marginTop: 20,
    color: "#14C6CB",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "semibold",
  },
});
