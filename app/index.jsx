import { useRouter } from "expo-router";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const splashImage = require("@/assets/images/splash.png");

const CoffeeApp = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        {/* Background image shifted upward */}
        <ImageBackground
          source={splashImage}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.fadeOverlay} />
          {/* Black overlay at the bottom */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>
              Fall in Love with {"\n"}
              Coffee in Blissful {"\n"} Delight!
            </Text>
            <Text style={styles.subtitle}>
              Welcome to our cozy coffee corner, where {"\n"} every cup is a
              delightful for you.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/notes")}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // ensures black below shifted image
  },
  background: {
    // flex: 1,
    height: "90%",
    // width: "80%",
    justifyContent: "flex-end",
    // marginTop: 90,
  },
  fadeOverlay: {
    position: "absolute",
    bottom: "25%", // start fading above bottomSection
    left: 0,
    right: 0,
    height: 120, // how tall the fade is
    // backgroundColor: "rgba(0,0,0,0.1)",
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "20%", // height of the bottom section
    backgroundColor: "rgba(0,0,0,)",
    // padding: 0,
    // paddingVertical: -10,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 3, // Add space between letters
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#7a7a7aff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#8B4513",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CoffeeApp;
