import { View, FlatList, Text, StyleSheet } from "react-native";
import CategoryCard from "./CategoryCard";
import { COLORS } from "../constants/colors";

const CATEGORIES = [
  {
    id: "1",
    name: "Pizza",
    image: require("../../assets/home/pizza-icon.png"),
    items: [
      {
        id: "1",
        name: "Primavera Pizza",
        image: require("../../assets/home/pizza1.png"),
        rating: "5.0",
        price: "$5.99",
        info: {
          weight: "Weight 540 gr",
          crust: "Thin Crust",
          time: "30 min",
          size: 'Large 16\"',
        },
        ingredients: [
          { id: "1", name: "ham", image: require("../../assets/home/ham.png") },
          {
            id: "2",
            name: "tomato",
            image: require("../../assets/home/tomato.png"),
          },
          {
            id: "3",
            name: "garlic",
            image: require("../../assets/home/garlic.png"),
          },
          {
            id: "4",
            name: "cheese",
            image: require("../../assets/home/cheese.png"),
          },
        ],
      },
      {
        id: "2",
        name: "Chicken BBQ Pizza",
        image: require("../../assets/home/pizza2.png"),
        rating: "4.9",
        price: "$5.99",
        info: {
          weight: "Weight 540 gr",
          crust: "Thin Crust",
          time: "30 min",
          size: 'Medium 14\"',
        },
        ingredients: [
          { id: "1", name: "ham", image: require("../../assets/home/ham.png") },
          {
            id: "2",
            name: "tomato",
            image: require("../../assets/home/tomato.png"),
          },
          {
            id: "3",
            name: "garlic",
            image: require("../../assets/home/garlic.png"),
          },
          {
            id: "4",
            name: "cheese",
            image: require("../../assets/home/cheese.png"),
          },
        ],
      },
      {
        id: "3",
        name: "Pepproni Pizza",
        image: require("../../assets/home/pizza3.png"),
        price: "$5.99",
        rating: "4.7",
        info: {
          weight: "Weight 540 gr",
          crust: "Thin Crust",
          time: "30 min",
          size: 'Small 12\"',
        },
        ingredients: [
          { id: "1", name: "ham", image: require("../../assets/home/ham.png") },
          {
            id: "2",
            name: "tomato",
            image: require("../../assets/home/tomato.png"),
          },
          {
            id: "3",
            name: "garlic",
            image: require("../../assets/home/garlic.png"),
          },
          {
            id: "4",
            name: "cheese",
            image: require("../../assets/home/cheese.png"),
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Seafood",
    image: require("../../assets/home/shrimp-icon.png"),
    items: [],
  },
  {
    id: "3",
    name: "Soft Drinks",
    image: require("../../assets/home/soda-icon.png"),
    items: [],
  },
];

export default function CategoriesList({
  handleSelectedCategory,
  selectedCategoryId,
}) {
  return (
    <View style={styles.list}>
      <Text style={styles.title}> Categories</Text>
      <FlatList
        style={{ padding: 5, borderRadius: 15 }}
        data={CATEGORIES}
        horizontal
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            isSelected={selectedCategoryId === item.id}
            onPress={() => handleSelectedCategory(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 15,
    shadowColor: COLORS.OUTLINE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
