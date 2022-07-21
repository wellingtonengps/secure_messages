import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {
  AnswerComponent,
  IconButtonComponent,
  InputComponent,
} from '../../components';
//import Clipboard from '@react-native-community/clipboard';
import Icon from 'react-native-vector-icons/Ionicons';
var aesjs = require('aes-js');

const crypt = (text: string) => {
  // An example 128-bit key (16 bytes * 8 bits/byte = 128 bits)
  var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  // Convert text to bytes
  var textBytes = aesjs.utils.utf8.toBytes(text);

  // The counter is optional, and if omitted will begin at 1
  var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  var encryptedBytes = aesCtr.encrypt(textBytes);

  // To print or store the binary data, you may convert it to hex
  var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

  console.log(encryptedHex);
  // "a338eda3874ed884b6199150d36f49988c90f5c47fe7792b0cf8c7f77eeffd87
  //  ea145b73e82aefcf2076f881c88879e4e25b1d7b24ba2788"

  // When ready to decrypt the hex string, convert it back to bytes
  var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

  // The counter mode of operation maintains internal state, so to
  // decrypt a new instance must be instantiated.
  var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  var decryptedBytes = aesCtr.decrypt(encryptedBytes);

  // Convert our bytes back into text
  var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
  console.log(decryptedText);
  // "Text may be any length you wish, no padding is required."

  return encryptedHex;
};

const DecryptScreen = () => {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [textCrypt, setTextCrypt] = useState('');

  function handleCrypt() {
    setTextCrypt(crypt(text));
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
            value={key}
            onChangeText={setKey}
            placeholder="Type your secret key"
            size="small"
          />
          <IconButtonComponent color="#F15937" onPress={handleCrypt}>
            <Icon name="lock-open-outline" size={32} color="#333" />
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

export default DecryptScreen;
