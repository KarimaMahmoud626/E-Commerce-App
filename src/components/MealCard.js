import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { COLORS } from "../constants/colors";
import AddButton from "./AddButton";

export default function MealCard({
  item,
  isOrdered,
  handleOrderedMeal,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <View style={styles.card}>
          <View>
            <View style={{ padding: 20 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="diamond" size={20} />
                <Text style={styles.header}>{"\t"}top of the week</Text>
              </View>
              <View style={{ height: 15 }}></View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.info}>{item.info.weight}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 2 }}>
                <AddButton
                  color={COLORS.PRIMARY}
                  isPressed={isOrdered}
                  onPress={() => handleOrderedMeal(item)}
                />
              </View>
              <View style={{ width: 10 }}></View>
              <View style={styles.rating}>
                <Ionicons name="star" size={18} color={COLORS.ON_SURFACE} />
                <Text style={{ fontWeight: "bold" }}>{item.rating}</Text>
              </View>
            </View>
          </View>
          <View style={styles.image}>
            <Image source={item.image} style={{ marginVertical: 10 }} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: COLORS.SURFACE,
    overflow: "hidden",
    shadowColor: COLORS.OUTLINE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 25,
    elevation: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.ON_SURFACE,
  },
  name: { fontSize: 20, fontWeight: "semibold" },
  info: { fontSize: 16, fontWeight: "100", color: "gray" },
  rating: { flexDirection: "row", flex: 1 },
  image: { justifyContent: "center", alignItems: "center" },
});
