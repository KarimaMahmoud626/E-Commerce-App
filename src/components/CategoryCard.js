import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import IconButton from "./IconButton";
import { COLORS } from "../constants/colors";

export default function CategoryCard({ item, isSelected, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isSelected
          ? [styles.categoryCard, { backgroundColor: COLORS.PRIMARY }]
          : styles.categoryCard
      }
    >
      <Image source={item.image} />
      <Text>{item.name}</Text>
      <IconButton
        iconName={"chevron-forward"}
        circular={true}
        selected={isSelected}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    height: 180,
    width: 120,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: COLORS.SURFACE,
    padding: 10,
    shadowColor: COLORS.OUTLINE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 15,
    marginBottom: 5,
  },
});
