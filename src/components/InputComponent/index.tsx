import React, {Dispatch} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface InputComponentProps {
  value: string;
  isClipboard?: boolean;
  placeholder?: string;
  size?: 'small' | 'large';
  onChangeText: Dispatch<React.SetStateAction<string>>;
}

const InputComponent = (props: InputComponentProps) => {
  return (
    <View
      style={
        props.size === 'small' ? styles.containerSmall : styles.containerLarge
      }>
      <TextInput
        selectTextOnFocus={false}
        value={props.value}
        onChangeText={props.onChangeText}
        multiline
        numberOfLines={18}
        placeholderTextColor="#cbcbcb"
        placeholder={props.placeholder}
        style={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLarge: {
    backgroundColor: '#F1F2F2',
    borderRadius: 13,
    height: 270,
    width: 291,
    padding: 5,
    flexDirection: 'column',
    color: '#333',
  },
  containerSmall: {
    backgroundColor: '#F1F2F2',
    borderRadius: 13,
    height: 50,
    width: 230,
    padding: 5,
    justifyContent: 'center',
    color: '#333',
  },
  text: {
    color: '#333',
    fontSize: 16,
    textAlignVertical: 'top',
    justifyContent: 'flex-start',
  },
});

export default InputComponent;
