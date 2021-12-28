import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import CardForm from "./CardForm";


const Pop = ({showPop, setShowPop, card, onRefresh}) => {
  

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPop}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShowPop(!showPop);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CardForm setShowPop={setShowPop} card={card} onRefresh={onRefresh}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowPop(!showPop)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    width: 100,
    padding: 10,
    margin: 5,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#5e71fc",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Pop;