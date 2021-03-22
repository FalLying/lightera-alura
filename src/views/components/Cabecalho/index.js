import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  COR_DE_FUNDO,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_XX_LARGE,
} from '../../../styles/styles';

import Sacola from '../Sacola';

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerFlex}>
        <Text style={styles.titulo}>Lighteria</Text>
        <Sacola />
      </View>
      <View style={styles.containerDescricao}>
        <View style={styles.containerSeparador} />
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 6,
  },
  titulo: {
    fontFamily: 'OpenSans-Bold',
    fontSize: FONT_SIZE_XX_LARGE,
  },

  containerDescricao: {},
  containerSeparador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 34,
    backgroundColor: COR_DE_FUNDO,
    color: '#A1A5AA',
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});

export default Cabecalho;
