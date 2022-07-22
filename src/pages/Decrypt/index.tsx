import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {
  AnswerComponent,
  IconButtonComponent,
  InputComponent,
} from '../../components';
//import Clipboard from '@react-native-community/clipboard';
import Icon from 'react-native-vector-icons/Ionicons';
import {decrypt} from '../../utils/AES';

const DecryptScreen = () => {
  const [text, setText] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [textDecrypt, setTextDecrypt] = useState('');

  function handleCrypt() {
    setTextDecrypt(decrypt(text, secretKey));
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
          <IconButtonComponent color="#F15937" onPress={handleCrypt}>
            <Icon name="lock-open-outline" size={32} color="#333" />
          </IconButtonComponent>
        </View>
        <AnswerComponent
          value={textDecrypt}
          onChangeText={setTextDecrypt}
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
