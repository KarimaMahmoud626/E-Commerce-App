import { View, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export default function IngredientCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 80,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.SURFACE,
    padding: 10,
    shadowColor: COLORS.OUTLINE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 15,
  },
});
