import { Ionicons } from "@react-native-vector-icons/ionicons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const styles = StyleSheet.create({
  button: {
    padding: 8,
    height: 40,
    width: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.OUTLINE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 15,
    backgroundColor: COLORS.SURFACE,
  },
});

export default function IconButton({
  iconName,
  onPress,
  size = 20,
  color = COLORS.ON_SURFACE,
  isClicked = false,
  circular,
  selected,
  backgroundColor,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        circular
          ? [
              styles.button,
              {
                borderRadius: 25,
                backgroundColor: selected ? COLORS.SURFACE : COLORS.SECONDARY,
              },
            ]
          : [
              styles.button,
              { backgroundColor: backgroundColor ?? COLORS.SURFACE },
            ]
      }
    >
      <Ionicons
        name={isClicked ? `${iconName}` : `${iconName}-outline`}
        size={size}
        color={isClicked ? color : COLORS.ON_SURFACE}
      />
    </TouchableOpacity>
  );
}
