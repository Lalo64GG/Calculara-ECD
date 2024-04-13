import React from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native';

export const ModalRaphson = ({ setModalVisible, modalVisible, solution }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Resultado:</Text>
          {solution && solution.length >= 2 && (
            <>
              <Text style={styles.modalText}>Iteración: {solution[1][0]['iteracion']}</Text>
              <Text style={styles.modalText}>x: {solution[1][0]['x']}</Text>
              <Text style={styles.modalText}>f(x): {solution[1][0]['f(x)']}</Text>
              <Text style={styles.modalText}>dx(x): {solution[1][0]['dx(x)']}</Text>
            </>
          )}
          <TouchableOpacity
            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semi-transparente
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 5,
    padding: 15,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
