// En ButtonNumericsModal.js
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
} from "react-native";

export const ButtonNumericsModal = ({
  setEquation,
  handleCalculate,
  variables,
  setVariables,
  method,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (value) => {
    setEquation((prevEquation) => prevEquation + value);
  };

  const handleClearAll = () => {
    setEquation("");
  };

  const handleBackspace = () => {
    setEquation((prevEquation) => prevEquation.slice(0, -1));
  };

  const handleCalculateModal = () => {
    setModalVisible(true);
  };

  const renderMethodForm = () => {
    switch (method) {
      
      case "Biseccion":
        return (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="a"
              onChangeText={(text) => setVariables({ ...variables, a: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="b"
              onChangeText={(text) => setVariables({ ...variables, b: text })}
            />
          </View>
        );
      case "Secante":
        return (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="variable"
              onChangeText={(text) =>
                setVariables({ ...variables, variable: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="x0"
              onChangeText={(text) => setVariables({ ...variables, x0: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="x1"
              onChangeText={(text) => setVariables({ ...variables, x1: text })}
            />
          </View>
        );
      case "Falsa Posición":
        return (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="a"
              onChangeText={(text) => setVariables({ ...variables, a: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="b"
              onChangeText={(text) => setVariables({ ...variables, b: text })}
            />
          </View>
        );
      case "Newton-Raphson":
        return (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="variable"
              onChangeText={(text) =>
                setVariables({ ...variables, variable: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="x0"
              onChangeText={(text) => setVariables({ ...variables, x0: text })}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.numericButtons}>
      <View style={styles.divider}></View>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleClearAll} style={styles.otherButtons}>
          <Text style={styles.otherButtonsText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBackspace} style={styles.otherButtons}>
          <Text style={styles.otherButtonsText}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(")")}
          style={styles.otherButtons}
        >
          <Text style={styles.otherButtonsText}>more</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("/")}
          style={styles.otherButtons}
        >
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handlePress("7")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("8")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("9")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("*")}
          style={styles.otherButtons}
        >
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handlePress("4")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("5")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("6")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("-")}
          style={styles.otherButtons}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handlePress("1")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("2")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("3")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("+")}
          style={styles.otherButtons}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handlePress("%")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("0")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(".")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("=")}
          style={styles.otherButtons}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleCalculateModal()}
          style={styles.button2}
        >
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Selector de método */}
            <Text style={styles.title}>{method}</Text>
            {/* Formulario específico del método seleccionado */}
            {renderMethodForm()}
            {/* Botón para cerrar el modal */}
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{ ...styles.button3, backgroundColor: "red" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.buttonText}>Cerrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ ...styles.button3 }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  handleCalculate();
                }}
              >
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: 400,
    borderWidth: 0.5, // Ajustado a 1 píxel para una línea delgada
    borderColor: "white",
    backgroundColor: "transparent",
    marginTop: 10,
    marginBottom: 20,
  },
  numericButtons: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: -20,
    marginBottom: 20,
  },
  button: {
    width: 70, // Establece un ancho fijo para todos los botones
    borderRadius: 5,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  button2: {
    width: 100, // Establece un ancho fijo para todos los botones
    borderRadius: 5,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginBottom: 100,
  },
  button3: {
    width: 100, // Establece un ancho fijo para todos los botones
    borderRadius: 5,
    backgroundColor: "#2962FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 50,
  },
  otherButtons: {
    width: 70, // Establece un ancho fijo para todos los botones
    borderRadius: 5,
    backgroundColor: "#2962FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  otherButtonsText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    height: 300,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 20,
  },
});
