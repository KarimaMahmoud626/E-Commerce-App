import { View } from "react-native";
import IconButton from "./IconButton";
import { COLORS } from "../constants/colors";

export default function StarButton() {
  return (
    <View>
      <IconButton
        iconName={"star"}
        backgroundColor={COLORS.PRIMARY}
        color="#FFF"
      />
    </View>
  );
}
