import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";
import { TabsNavigator } from "./TabsNavigator";
import { NewEntryScreen } from "../../screens/NewEntryScreen";
import { theme } from "../../theme";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primaryNavy },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NewEntry" component={NewEntryScreen} options={{ title: "Novo Lançamento" }} />
    </Stack.Navigator>
  );
}
