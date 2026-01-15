import React from "react";
import { StyleSheet, Text } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";

export function SettingsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Configurações do Mês</Text>

      <Card style={styles.card}>
        <Text style={styles.text}>
          Aqui vai entrar: renda mensal, dia de virada do mês e cadastro dos fixos (modelos).
        </Text>
      </Card>

      <PrimaryButton label="Salvar Alterações" variant="teal" onPress={() => {}} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  card: { marginBottom: theme.spacing.md },
  text: { color: theme.colors.textSecondary },
});
