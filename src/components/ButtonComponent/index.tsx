import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from 'react-native';

interface ButtonComponentProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F2F2',
    height: 50,
    width: 182,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#333',
    fontSize: 16,
  },
});

export default ButtonComponent;
