import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#f5f5f5ff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="notes"
        options={{
          headerTitle: "Notes",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
