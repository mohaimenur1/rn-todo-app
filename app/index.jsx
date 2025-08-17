// import PostIt from "@/assets/images/post-it.png"; // Example image import
// import { useRouter } from "expo-router";
// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default function Index() {
//   const router = useRouter();
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Image source={PostIt} style={styles.logoImage} />
//       <Text style={styles.title}>Welcome to Notes App</Text>
//       <Text style={styles.subTitle}>
//         Captures your thoughts any time, any where
//       </Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => router.push("/notes")}
//       >
//         <Text style={{ color: "white" }}>Get Started</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   logoImage: { width: 100, height: 100 },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginTop: 20,
//   },
//   subTitle: {
//     fontSize: 16,
//     color: "#666",
//     marginTop: 10,
//   },
//   button: {
//     backgroundColor: "#3d81ceff",
//     color: "#fff",
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const splashImage = require("@/assets/images/splash.png");

export default function CoffeeScreen() {
  return (
    <Image
      source={splashImage} // <-- replace with your coffee image path
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Fall in Love with{"\n"}Coffee in Blissful Delight!
        </Text>
        <Text style={styles.subtitle}>
          Welcome to our cozy coffee corner, where{"\n"}
          every cup is a delightful for you.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Image>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)", // dark overlay for readability
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#d1d5db",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#d07c44", // coffee-like color
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
