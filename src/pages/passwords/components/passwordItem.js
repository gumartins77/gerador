import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone necessário

export function PasswordItem({ data, removePassword }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>
        {isPasswordVisible ? data : "*".repeat(data.length)}
      </Text>
      <Pressable
        onPress={togglePasswordVisibility}
        style={styles.visibilityButton}
      >
        <Icon
          name={isPasswordVisible ? "eye" : "eye-slash"}
          size={20}
          color="#FFF"
        />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#FFF",
  },
  visibilityButton: {
    padding: 10,
    borderRadius: 5,
  },
});
