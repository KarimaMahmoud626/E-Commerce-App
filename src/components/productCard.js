import { View, Text, StyleSheet, Image } from "react-native";

export const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product?.images[0] }} style={styles.productImage} />
      <View style={styles.row}>
        <Text>{product?.brand}</Text>
        <View style={styles.row}>
          <Image
            source={require("../../assets/rating-icon.jpg")}
            style={styles.icon}
          />
          <Text>{product?.rating}</Text>
        </View>
      </View>
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.price}>${product?.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { width: 165, borderRadius: 12, backgroundColor: "#fff", margin: 4 },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    resizeMode: "contain",
    backgroundColor: "#F3F3F3",
  },
  icon: { width: 16, height: 16, marginRight: 4 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
  },
  brand: { fontWeight: "bold", color: "#666" },
  title: { fontSize: 14, marginTop: 4, paddingHorizontal: 4 },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#362670",
    marginTop: 4,
    paddingHorizontal: 4,
  },
});
