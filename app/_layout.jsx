import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#f5f5f5ff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "onboarding",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="notes"
        options={{
          headerTitle: "Notes",
          headerTitleAlign: "center",
        }}
      /> */}
    </Stack>
  );
}
