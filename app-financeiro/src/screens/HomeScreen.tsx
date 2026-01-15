import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenContainer } from "../components/ScreenContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { SummaryCard } from "../components/SummaryCard";
import { theme } from "../theme";
import type { RootStackParamList } from "../app/navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Tabs">;

export function HomeScreen({ navigation }: Props) {
  return (
    <ScreenContainer style={styles.container}>
      <Text style={styles.title}>Mês de Abril</Text>

      <View style={styles.summary}>
        <SummaryCard title="Saldo Livre" value="R$ 1.850" subtitle="Tudo certo!" variant="teal" />
        <SummaryCard title="Fixos do Mês" value="R$ 2.300" variant="navy" />
        <SummaryCard title="Cartão a Pagar" value="R$ 1.200" variant="navy" />
      </View>

      <View style={{ flex: 1 }} />

      <PrimaryButton
        label="+ Adicionar Gasto"
        variant="gold"
        onPress={() => navigation.navigate("NewEntry")}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: theme.spacing.lg },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  summary: { gap: theme.spacing.sm },
});
