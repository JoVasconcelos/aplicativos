import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

export type SegmentedOption = {
  key: string;
  label: string;
};

type Props = {
  value: string;
  options: SegmentedOption[];
  onChange: (key: string) => void;
};

export function SegmentedControl({ value, options, onChange }: Props) {
  return (
    <View style={styles.container}>
      {options.map((opt) => {
        const selected = opt.key === value;
        return (
          <Pressable
            key={opt.key}
            onPress={() => onChange(opt.key)}
            style={[
              styles.button,
              { backgroundColor: selected ? theme.colors.primaryNavy : theme.colors.surface },
            ]}
          >
            <Text style={[styles.text, { color: selected ? "#fff" : theme.colors.textPrimary }]}>
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  text: {
    fontWeight: "800",
  },
});
