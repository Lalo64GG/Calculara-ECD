import React from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity, ScrollView } from 'react-native';

export const ModalFalse = ({ setModalVisible, modalVisible, solution }) => {
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
          <ScrollView style={styles.scrollView}>
            {solution && solution.iteraciones && solution.iteraciones.map((iteration, index) => (
              <View key={index}>
                <Text style={styles.modalText}>Iteración: {iteration.iteracion}</Text>
                <Text style={styles.modalText}>a: {iteration.a}</Text>
                <Text style={styles.modalText}>b: {iteration.b}</Text>
                <Text style={styles.modalText}>f(x): {iteration.fx}</Text>
                <Text style={styles.modalText}>x: {iteration.x}</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.modalText}>Raíz: {solution && solution.raiz}</Text>
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
  scrollView: {
    width: '100%',
  },
});
