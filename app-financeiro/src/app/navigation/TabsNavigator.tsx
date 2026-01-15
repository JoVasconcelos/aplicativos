import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { TabParamList } from "./types";
import { HomeScreen } from "../../screens/HomeScreen";
import { FixedMonthScreen } from "../../screens/FixedMonthScreen";
import { SettingsScreen } from "../../screens/SettingsScreen";
import { theme } from "../../theme";

const Tab = createBottomTabNavigator<TabParamList>();

export function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primaryNavy },
        headerTintColor: "#fff",
        tabBarActiveTintColor: theme.colors.secondaryTeal,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: { borderTopColor: theme.colors.border },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Início" }} />
      <Tab.Screen name="FixedMonth" component={FixedMonthScreen} options={{ title: "Fixos" }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: "Config." }} />
    </Tab.Navigator>
  );
}
