import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {
  AnswerComponent,
  IconButtonComponent,
  InputComponent,
} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {ciphertext} from '../../utils/AES';

const EncryptScreen = () => {
  const [text, setText] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [textCrypt, setTextCrypt] = useState('');

  function handleCrypt() {
    setTextCrypt(ciphertext(text, secretKey));
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#56799C" barStyle={'dark-content'} />
        <InputComponent
          value={text}
          onChangeText={setText}
          placeholder="Type something"
        />
        <View style={styles.wrapperMiddle}>
          <InputComponent
            value={secretKey}
            onChangeText={setSecretKey}
            placeholder="Type your secret key"
            size="small"
          />
          <IconButtonComponent color="#30BC68" onPress={handleCrypt}>
            <Icon name="lock-closed-outline" size={32} color="#333" />
          </IconButtonComponent>
        </View>
        <AnswerComponent
          value={textCrypt}
          onChangeText={setTextCrypt}
          isClipboard
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: '#56799C',
    flex: 1,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  wrapperMiddle: {
    marginBottom: 30,
    marginTop: 30,
    width: 291,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default EncryptScreen;
