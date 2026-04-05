import { View } from "react-native";
import BackButton from "./BackButton";
import StarButton from "./StartButton";
import { useNavigation } from "@react-navigation/native";

export default function SimpleAppBar() {
  const navigate = useNavigation();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <BackButton onPress={() => navigate.goBack()} />
      <StarButton />
    </View>
  );
}
