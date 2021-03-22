import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DataContext} from '../../provider';
import Botao from '../components/Botao';
import Item from './item';

const Checkout = () => {
  const {itensCheckout} = useContext(DataContext);
  const navigation = useNavigation();

  const valorTotal = itensCheckout
    .reduce((acc, atual) => acc + atual.quantidade * atual.preco, 0)
    .toFixed(2);
  const Titulo = ({children}) => <Text style={styles.titulo}>{children}</Text>;

  return (
    <View style={styles.container}>
      <Titulo>Checkout</Titulo>
      {itensCheckout.map((item, index) => (
        <Item key={index} {...item} />
      ))}
      <Text style={styles.textoTotal}>Total: {`R$ ${valorTotal}`}</Text>
      <Botao titulo="Finalizar Compra"></Botao>
      <TouchableOpacity onPress={() => navigation.push('ListaProdutos')}>
        <Text style={styles.textoContinuaComprando}>Continuar comprando</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  titulo: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    marginBottom: 12,
  },
  textoContinuaComprando: {
    color: 'blue',
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    margin: 16,
  },
  textoTotal: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    marginVertical: 16,
  },
});

export default Checkout;
