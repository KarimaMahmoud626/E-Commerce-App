import { View, Text, FlatList } from "react-native";
import IngredientCard from "./IngredientCard";

export default function IngredientsList({ ingredients }) {
  return (
    <View>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>Ingredints</Text>
      <View style={{ height: 15 }} />
      <FlatList
        style={{ padding: 10, borderRadius: 10 }}
        data={ingredients}
        horizontal
        renderItem={({ item }) => <IngredientCard item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
      />
    </View>
  );
}
