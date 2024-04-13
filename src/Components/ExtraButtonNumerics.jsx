import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export const ExtraButtonNumerics = ({ setEquation }) => {
  const handlePress = (value) => {
    setEquation((prevEquation) => prevEquation + value);
  };

  return (
    <View style={styles.extraButtons}>
      <TouchableOpacity onPress={() => handlePress("∫")}>
        <Text style={styles.operationButton}>∫</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("d/dx")}>
        <Text style={styles.operationButton}>d/dx</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("sin(")}>
        <Text style={styles.operationButton}>sin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("cos(")}>
        <Text style={styles.operationButton}>cos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("tan(")}>
        <Text style={styles.operationButton}>tan</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("x")}>
        <Text style={styles.operationButton}>x</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("y")}>
        <Text style={styles.operationButton}>y</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  extraButtons: {
    marginLeft: 10,
    flexDirection: "row",
    gap: 0,
    marginBottom: 0,
  },
  numericButtons: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "",
    gap: 15,
    marginBottom: 10,
  },
  numberButton: {
    fontSize: 24,
    padding: 10,
    backgroundColor: "transparent", // Hacer el botón transparente
    borderRadius: 5,
  },
  operationButton: {
    fontSize: 24,
    padding: 10,
    backgroundColor: "transparent", // Hacer el botón transparente
    borderRadius: 5,
    fontWeight: "bold",
    color: "#3b3b3b", // Establecer el color del texto
  },
});
