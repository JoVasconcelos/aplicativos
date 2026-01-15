import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { theme } from "../theme";

type Props = {
  title: string;
  value: string;
  subtitle?: string;
  variant?: "teal" | "navy";
  style?: ViewStyle;
};

export function SummaryCard({ title, value, subtitle, variant = "navy", style }: Props) {
  const backgroundColor = variant === "teal" ? theme.colors.secondaryTeal : theme.colors.primaryNavy;

  return (
    <View style={[styles.card, { backgroundColor }, style]}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>

        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: theme.spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing.md,
  },
  left: { flex: 1 },
  title: { color: "#fff", fontWeight: "800", fontSize: 14, opacity: 0.95 },
  subtitle: { color: "#fff", marginTop: 6, fontWeight: "700", opacity: 0.9 },
  value: { color: "#fff", fontSize: 22, fontWeight: "900" },
});
