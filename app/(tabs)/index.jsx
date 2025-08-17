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
//         backgroundColor: "#1e293b",
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
//     color: "#fff",
//   },
//   subTitle: {
//     fontSize: 16,
//     color: "#fff",
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

import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const splashImage = require("@/assets/images/splash.png");

const CoffeeApp = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={splashImage} // Replace with actual image URL
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text style={styles.subtitle}>
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    height: "50%",
  },
  title: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#8B4513",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CoffeeApp;
