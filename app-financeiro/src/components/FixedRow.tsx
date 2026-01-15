import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
  planned: string;
  actual: string;
  paid?: boolean;
};

export function FixedRow({ name, planned, actual, paid = false }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{name}</Text>

      <View style={styles.moneyCol}>
        <Text style={styles.money}>{planned}</Text>
      </View>

      <View style={styles.moneyCol}>
        <Text style={styles.money}>{actual}</Text>
        {paid ? <Text style={styles.check}>✓</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  name: { flex: 1.2, fontWeight: "800", color: theme.colors.textPrimary },
  moneyCol: { flex: 1, alignItems: "flex-end", flexDirection: "row", justifyContent: "flex-end", gap: 8 },
  money: { fontWeight: "800", color: theme.colors.textPrimary },
  check: { fontWeight: "900", color: theme.colors.success },
});
