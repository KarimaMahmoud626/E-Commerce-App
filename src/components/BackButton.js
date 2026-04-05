import { View } from "react-native";
import IconButton from "./IconButton";

export default function BackButton({ onPress }) {
  return (
    <View>
      <IconButton iconName={"chevron-back"} onPress={onPress} />
    </View>
  );
}
