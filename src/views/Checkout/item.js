import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Item = ({itemName, titulo, imagem, preco, quantidade}) => {
  return (
    <View style={styles.container}>
      <View style={styles.produto}>
        <View style={styles.img}>
          <Image
            style={styles.imagemProduto}
            source={imagem}
            resizeMode="cover"
          />
        </View>
        <View style={styles.descricao}>
          <Text style={styles.textoNegrito}>{itemName}</Text>
          <Text>{titulo}</Text>
        </View>
      </View>
      <View style={styles.precoProduto}>
        <Text style={styles.textoNegrito}>R$ {preco}</Text>
        <Text style={styles.textoNegrito}>Qtd: {quantidade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 4,
  },
  img: {
    backgroundColor: '#ddd',
    padding: 10,
  },
  produto: {
    flexDirection: 'row',
  },
  descricao: {
    padding: 16,
  },
  textoNegrito: {
    fontFamily: 'OpenSans-Bold',
  },
  precoProduto: {
    padding: 16,
  },
  imagemProduto: {
    margin: 4,
    width: 25,
    height: 25,
  },
});

export default Item;
