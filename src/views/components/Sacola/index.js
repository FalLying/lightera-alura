import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {DataContext} from '../../../provider';

const Sacola = () => {
  const navigation = useNavigation();

  const {itensCheckout} = useContext(DataContext);

  return (
    <TouchableOpacity onPress={() => navigation.push('Checkout')}>
      <View style={styles.containerSacola}>
        <Image
          source={require('../../../assets/images/icone-sacola.png')}
          style={styles.image}
        />
        {itensCheckout.length > 0 && (
          <View style={styles.sacolaItem}>
            <Text style={styles.sacolaText}>
              {itensCheckout.reduce(
                (acumulado, atual) => acumulado + atual.quantidade,
                0,
              )}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerSacola: {
    borderRadius: 30,
    backgroundColor: '#FFF',
    padding: 18,
  },
  image: {
    height: 30,
    width: 30,
  },
  sacolaItem: {
    borderRadius: 30,
    backgroundColor: 'red',

    marginTop: -22,
    marginLeft: 11,
  },
  sacolaText: {
    color: '#fff',
    padding: 3,
    textAlign: 'center',
  },
});

export default Sacola;
