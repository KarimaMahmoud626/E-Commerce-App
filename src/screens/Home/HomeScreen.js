import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/AppBar";
import { COLORS } from "../../constants/colors";
import SearchBar from "../../components/SearchBar";
import CategoriesList from "../../components/CategoriesList";
import MealsList from "../../components/MealsList";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [orderedMeal, setOrderedMeal] = useState(null);
  const navigator = useNavigation();

  const handleSelectedCategory = (item) => {
    setSelectedCategory(item);
  };

  const handleOrderedMeal = (meal) => {
    setOrderedMeal(meal);
  };

  const handleMealCardPress = (meal) => {
    navigator.navigate("MealDetails", { meal: meal });
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <MealsList
          category={selectedCategory}
          orderededMeal={orderedMeal}
          handleOrderedMeal={handleOrderedMeal}
          handleMealCardPress={handleMealCardPress}
          header={
            <>
              <AppBar />
              <View>
                <Text style={{ fontSize: 24 }}>Food</Text>
                <Text style={styles.title}>Delivery</Text>
              </View>
              <SearchBar placeholder="Search for meals..." />
              <CategoriesList
                handleSelectedCategory={handleSelectedCategory}
                selectedCategoryId={selectedCategory?.id ?? "1"}
              />
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                Popular
              </Text>
            </>
          }
        />
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
  title: { fontSize: 42, fontWeight: "bold" },
});
