import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ButtonComponent} from '../../components';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2C3E50" barStyle={'light-content'} />
      <Text style={styles.title}>Secure Messages</Text>
      <Image source={require('../../image/logo.png')} style={styles.logo} />
      <Text style={styles.subTitle}>
        Secure your messages with {'\n'}encrytion
      </Text>
      <View style={styles.wrapperButton}>
        <ButtonComponent
          title="Encrypt"
          onPress={() => navigation.navigate('Encrypt')}
        />
        <ButtonComponent
          title="Decrypt"
          onPress={() => navigation.navigate('Decrypt')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#2C3E50',
  },
  title: {
    marginTop: 51,
    fontSize: 32,
    color: '#F1F2F2',
    fontWeight: 'bold',
  },
  logo: {
    marginTop: 20,
    height: 160,
    resizeMode: 'center',
  },
  subTitle: {
    marginTop: 60,
    marginBottom: 60,
    fontSize: 20,
    color: '#F1F2F2',
    textAlign: 'center',
  },
  wrapperButton: {
    height: 127,
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
