import { View, FlatList } from "react-native";
import MealCard from "./MealCard";

const MEALS = [
  {
    id: "1",
    name: "Primavera Pizza",
    image: require("../../assets/home/pizza1.png"),
    rating: "5.0",
  },
  {
    id: "2",
    name: "Chicken BBQ Pizza",
    image: require("../../assets/home/pizza2.png"),
    rating: "4.6",
  },
  {
    id: "3",
    name: "Pepproni Pizza",
    image: require("../../assets/home/pizza3.png"),
    rating: "4.9",
  },
];

export default function MealsList({
  header,
  category,
  orderededMeal,
  handleOrderedMeal,
  handleMealCardPress,
}) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={category?.items}
        renderItem={({ item }) => (
          <MealCard
            item={item}
            handleOrderedMeal={handleOrderedMeal}
            isOrdered={orderededMeal?.id === item.id}
            onPress={() => handleMealCardPress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={header}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </View>
  );
}
