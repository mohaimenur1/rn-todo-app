import PostIt from "@/assets/images/post-it.png"; // Example image import
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e293b",
      }}
    >
      <Image source={PostIt} style={styles.logoImage} />
      <Text style={styles.title}>Welcome to Notes App</Text>
      <Text style={styles.subTitle}>
        Captures your thoughts any time, any where
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes")}
      >
        <Text style={{ color: "white" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: { width: 100, height: 100 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff",
  },
  subTitle: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#3d81ceff",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});
