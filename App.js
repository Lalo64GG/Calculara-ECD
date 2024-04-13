import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Modal, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { ButtonNumericsModal } from "./src/Components/ButtonNumerics";
import { ExtraButtonNumerics } from "./src/Components/ExtraButtonNumerics";
import { ModalRaphson } from "./src/Components/ModalRaphson";
import { ModalSecante } from "./src/Components/ModalSecante";
import { ModalFalse } from "./src/Components/ModalFalse";
import { ModalBise } from "./src/Components/ModalBiseccion";

export default function DifferentialEquationCalculator() {
  const [ecuacion, setEquation] = useState("");
  const [solution, setSolution] = useState("");
  const [method, setMethod] = useState("");
  const [selectedValue, setSelectedValue] = useState();
  const [variables, setVariables] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [ modalSeccante, setModalSecante] = useState(false)
  const [modalFalse, setModalFalse] = useState(false)
  const [modalBise, setModalBise] = useState(false)

  const handleCalculate = async () => {
    try {
      let response;
      console.log("Variables", variables);
      let objeto = { equation: ecuacion, ...variables };
      console.log("objeto", objeto);
      console.log(ecuacion);
      switch (method) {
        case "Biseccion":
          response = await axios.post(
            "https://metodosnumericos-x5vj.onrender.com/biseccion",
            {
              ...variables,
              ecuacion,
            }
          );
          break;
        case "Newton-Raphson":
          response = await axios.post(
            "https://metodosnumericos-x5vj.onrender.com/raphson",
            {
              equation: ecuacion,
              variable: variables.variable,
              x0: parseInt(variables.x0, 10),
            }
          );
          break;
        case "Secante":
          response = await axios.post(
            "https://metodosnumericos-x5vj.onrender.com/secantMethod",
            {
              ecuacion,
              variable: variables.variable,
              x0: parseFloat(variables.x0),
              x1: parseFloat(variables.x1),
            }
          );
          break;
        case "Falsa Posición":
          response = await axios.post(
            "https://metodosnumericos-x5vj.onrender.com/falsePosition",
            {
              ...variables,
              ecuacion,
            }
          );
          break;
        default:
          throw new Error("Método no válido");
      }
      // Verificar si la respuesta es exitosa y si contiene los datos esperados
    if (response ) {
      if (method === 'Newton-Raphson') {
        setSolution(response.data)
        setModalVisible(true); 
      } else if (method === 'Secante') {
        // Formatear la respuesta para el método de Secante
        setSolution(response.data);
        setModalSecante(true)

      } else if(method === 'Biseccion') {
        setSolution(response.data);
        setModalBise(true)

      } else if(method === 'Falsa Posición') {
        setSolution(response.data);
        setModalFalse(true)
      }
    } else {
      throw new Error('Respuesta no válida');
    }
    } catch (error) {
      console.error("Error al calcular:", error);
      setSolution("Error al calcular, revise los parámetros");
    }
  };
   

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={method}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setMethod(itemValue)}
        >
          <Picker.Item label="Metodo" />
          <Picker.Item label="Biseccion" value="Biseccion" />
          <Picker.Item label="Newton-Raphson" value="Newton-Raphson" />
          <Picker.Item label="Secante" value="Secante" />
          <Picker.Item label="Falsa Posición" value="Falsa Posición" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.equationTextInput}
          onChangeText={(text) => setEquation(text)}
          value={ecuacion}
          editable={false} // Desactiva la edición del TextInput
          onTouchStart={() => Keyboard.dismiss()} // Oculta el teclado al tocar el TextInput
          textAlign="right" // Alinea el texto a la izquierda
          fontSize={24} // Tamaño de fuente más grande
        />
      </View>

      <View style={styles.buttonsContainer}>
        <ExtraButtonNumerics setEquation={setEquation} />
        <ButtonNumericsModal
          setEquation={setEquation}
          handleCalculate={handleCalculate}
          variables={variables}
          setVariables={setVariables}
          method={method}
        />
      </View>

      <ModalRaphson setModalVisible={ setModalVisible } modalVisible = { modalVisible } solution = { solution } />
      <ModalSecante setModalVisible={ setModalSecante } modalVisible = { modalSeccante } solution = { solution } />
      <ModalFalse setModalVisible={ setModalFalse } modalVisible = { modalFalse } solution = { solution } />
      <ModalBise setModalVisible={ setModalBise } modalVisible = { modalBise } solution = { solution } />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semi-transparente
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height:200,
    width: 350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#141414", // Cambia el color de fondo a uno más minimalista
  },
  inputContainer: {
    flex: 1, // Ocupa la mitad de la pantalla
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%",
  },
  buttonsContainer: {
    flex: 1, // Ocupa la otra mitad de la pantalla
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  equationTextInput: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent", // Cambia el color de fondo del input a blanco
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#fff", // Cambia el color del texto del input a negro
    textAlign: "right", // Alinea el texto a la izquierda
    fontSize: 24,
  },
  solution: {
    marginTop: 20,
    fontSize: 18,
  },
  calculateButton: {
    color: "#fff",
    fontSize: 24,
    paddingVertical: 10,
  },
  methodSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
  pickerContainer: {
    borderRadius: 10, // ajusta el radio de las esquinas según lo desees
    overflow: "hidden",
  },
  picker: {
    marginTop: 20,
    height: 50,
    width: 150,
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    color: "white",
  },
});
