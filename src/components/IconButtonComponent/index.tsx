import React, {ReactNode} from 'react';
import {GestureResponderEvent, Pressable, StyleSheet} from 'react-native';

interface IconButtonComponentProps {
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
  children: ReactNode;
}

const IconButtonComponent = (props: IconButtonComponentProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.container, {backgroundColor: props.color}]}>
      {props.children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 35,
    color: '#333',
  },
});

export default IconButtonComponent;
