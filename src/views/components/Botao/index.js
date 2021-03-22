import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Botao = ({titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.botaoSucess}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoSucess: {
    backgroundColor: '#0044FF',
    color: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Botao;
