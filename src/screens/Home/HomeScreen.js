import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/products/productApi";
import { ProductCard } from "../../components/productCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts({ limit: 5 }).then((data) => setProducts(data.data));
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {products && (
          <FlatList
            data={products.products}
            renderItem={({ item }) => <ProductCard product={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            columnWrapperStyle={{ gap: 10 }}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F9FD",
  },
  title: { fontSize: 24, fontWeight: "bold" },
});
