import React from "react";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { theme } from "../theme";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "gold" | "navy" | "teal";
  style?: ViewStyle;
};

export function PrimaryButton({ label, onPress, variant = "navy", style }: Props) {
  const backgroundColor =
    variant === "gold"
      ? theme.colors.accentGold
      : variant === "teal"
        ? theme.colors.secondaryTeal
        : theme.colors.primaryNavy;

  return (
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor }, style]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
