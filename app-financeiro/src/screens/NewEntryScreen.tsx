import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PrimaryButton } from "../components/PrimaryButton";
import { TextField } from "../components/TextField";
import { SegmentedControl } from "../components/SegmentedControl";
import { theme } from "../theme";

export function NewEntryScreen() {
  const [amount, setAmount] = useState("R$ 80,00");
  const [category, setCategory] = useState("Mercado");
  const [note, setNote] = useState("");
  const [payment, setPayment] = useState("cash");

  return (
    <ScreenContainer>
      <Card style={styles.card}>
        <View style={styles.block}>
          <TextField label="Valor" value={amount} onChangeText={setAmount} placeholder="R$ 0,00" />
        </View>

        <View style={styles.block}>
          <TextField
            label="Categoria"
            value={category}
            onChangeText={setCategory}
            placeholder="Ex: Mercado"
          />
        </View>

        <View style={styles.block}>
          <Text style={styles.label}>Como Pagou?</Text>
          <SegmentedControl
            value={payment}
            onChange={setPayment}
            options={[
              { key: "cash", label: "Dinheiro" },
              { key: "pix", label: "PIX" },
              { key: "card", label: "Cartão" },
            ]}
          />
        </View>

        <View style={styles.block}>
          <TextField
            label="Nota (Opcional)"
            value={note}
            onChangeText={setNote}
            placeholder="Adicionar uma anotação..."
          />
        </View>
      </Card>

      <PrimaryButton label="Adicionar" variant="navy" onPress={() => {}} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: theme.spacing.md },
  block: { marginBottom: theme.spacing.md },
  label: { color: theme.colors.textPrimary, fontWeight: "800", marginBottom: 8 },
});
