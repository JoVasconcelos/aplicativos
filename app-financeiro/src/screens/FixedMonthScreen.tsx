import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PrimaryButton } from "../components/PrimaryButton";
import { FixedRow } from "../components/FixedRow";
import { theme } from "../theme";

export function FixedMonthScreen() {
  return (
    <View style={styles.page}>
      <ScreenContainer style={styles.container}>
        <Card style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={[styles.headerCell, { flex: 1.2 }]} />
            <Text style={[styles.headerCell, { flex: 1, textAlign: "right" }]}>Previsto</Text>
            <Text style={[styles.headerCell, { flex: 1, textAlign: "right" }]}>Realizado</Text>
          </View>

          <FixedRow name="Aluguel" planned="R$ 1.200" actual="R$ 1.200" paid />
          <FixedRow name="Plano de Saúde" planned="R$ 400" actual="R$ 450" paid />
          <FixedRow name="Internet" planned="R$ 150" actual="R$ 150" />

          <View style={styles.actions}>
            <PrimaryButton label="Marcar como Pago" variant="gold" onPress={() => {}} style={styles.payBtn} />
          </View>
        </Card>
      </ScreenContainer>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Total Fixos</Text>
        <Text style={styles.footerValue}>R$ 1.750 / R$ 1.800</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: theme.colors.background },
  container: { paddingBottom: 90 },
  card: { paddingTop: theme.spacing.sm },

  headerRow: {
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    marginBottom: 2,
  },
  headerCell: { fontWeight: "800", color: theme.colors.textSecondary },

  actions: { paddingTop: theme.spacing.md, alignItems: "flex-end" },
  payBtn: { width: 180 },

  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.primaryNavy,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: { color: "#fff", fontWeight: "800" },
  footerValue: { color: "#fff", fontWeight: "900" },
});
