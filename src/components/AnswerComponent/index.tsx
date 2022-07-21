import Clipboard from '@react-native-community/clipboard';
import React, {Dispatch, useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface AnswerComponentProps {
  value: string;
  isClipboard?: boolean;
  placeholder?: string;
  onChangeText: Dispatch<React.SetStateAction<string>>;
}

const AnswerComponent = (props: AnswerComponentProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(props.value);
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>copied!</Text>
        </View>
      </Modal>
      <View style={styles.wrapperButton}>
        <Pressable
          disabled={props.value ? false : true}
          style={styles.button}
          onPress={copyToClipboard}>
          <Icon
            name="copy-outline"
            style={[styles.icon, props.value ? {color: '#333'} : null]}
          />
        </Pressable>
      </View>
      <Text style={styles.text}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F2F2',
    borderRadius: 13,
    height: 270,
    width: 291,
    padding: 10,
    flexDirection: 'column',
    color: '#333',
  },
  text: {
    color: '#333',
    fontSize: 16,
    textAlignVertical: 'top',
    justifyContent: 'flex-start',
  },
  button: {
    width: 24,
    height: 25,
  },
  icon: {
    fontSize: 25,
    color: '#cbcbcb',
  },
  wrapperButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalView: {
    position: 'absolute',
    top: 594,
    left: 80,
    margin: 10,
    width: 182,
    backgroundColor: '#cbcbcb',
    borderRadius: 50,
    padding: 15,
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
    color: '#333',
    fontSize: 16,
  },
});

export default AnswerComponent;
