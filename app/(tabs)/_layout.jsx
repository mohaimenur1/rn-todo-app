import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#669CE9",
        tabBarInactiveTintColor: "#96A1B3",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          paddingTop: 10,
          paddingBottom: 30,
          borderTopColor: "#343F51",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "400",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={{ color: "transparent" }} />
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: "Notes",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={28} name="sticky-note" color={color} />
          ),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={{ color: "transparent" }} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
