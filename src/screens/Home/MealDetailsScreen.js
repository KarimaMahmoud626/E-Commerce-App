import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../../constants/colors";
import SimpleAppBar from "../../components/SimpleAppBar";
import { useRoute } from "@react-navigation/native";
import IngredientsList from "../../components/IngredientsList";
import CustomButton from "../../components/CustomButton";

export default function MealDetailsScreen() {
  const route = useRoute();
  const { meal } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SimpleAppBar />
        <View style={{ height: 25 }} />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{meal.name}</Text>
            <View style={{ height: 10 }} />
            <Text style={styles.price}>{meal.price}</Text>
            <View style={{ height: 15 }} />
            <Text style={{ color: "gray", fontSize: 22, fontWeight: "100" }}>
              Size
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {meal.info.size}
            </Text>
            <View style={{ height: 10 }} />
            <Text style={{ color: "gray", fontSize: 22, fontWeight: "100" }}>
              Crust
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {meal.info.crust}
            </Text>
            <View style={{ height: 10 }} />
            <Text style={{ color: "gray", fontSize: 22, fontWeight: "100" }}>
              Delivery in
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {meal.info.time}
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image source={meal.image} />
          </View>
        </View>
        <View style={{ height: 25 }} />
        <IngredientsList ingredients={meal.ingredients} />
        <View style={{ height: 25 }} />
        <CustomButton title={"Place an order"} postIcon={"chevron-forward"} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    padding: 20,
  },
  title: { fontSize: 38, fontWeight: "bold" },
  price: { fontSize: 32, fontWeight: "bold", color: COLORS.SECONDARY },
});
