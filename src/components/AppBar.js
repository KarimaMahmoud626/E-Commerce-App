import { View, StyleSheet } from "react-native";
import UserProfileHeader from "./UserProfileHeader";
import IconButton from "./IconButton";

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <UserProfileHeader />
      <View style={styles.iconButton}>
        <IconButton iconName="menu" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  iconButton: { flex: 1, alignItems: "flex-end", paddingRight: 10 },
});
