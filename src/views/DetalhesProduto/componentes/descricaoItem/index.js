import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Botao from '../../../components/Botao';
import {useContext} from 'react';
import {DataContext} from '../../../../provider';

const DescricaoItem = ({
  imagem,
  estudio,
  itemDesc,
  itemName,
  titulo,
  preco,
  id,
}) => {
  const precoFormatado = preco.toFixed(2);
  const navigation = useNavigation();

  const {adicionarItem} = useContext(DataContext);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.containerHeader}>
            <View>
              <Text style={styles.textEstudio}>{estudio}</Text>
              <Text style={styles.textItemName}>{itemName}</Text>
              <Text>{titulo}</Text>
            </View>
            <View style={styles.bgImage}>
              <Image
                style={styles.imagem}
                source={imagem}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text>{itemDesc}</Text>
          <View style={styles.containerFooter}>
            <Text style={styles.textPreco}>{`R$ ${precoFormatado}`}</Text>
            <Botao
              titulo="Comprar"
              onPress={() => {
                adicionarItem({
                  imagem,
                  estudio,
                  itemDesc,
                  itemName,
                  titulo,
                  preco,
                  id,
                });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 16,
  },
  itemContainer: {
    flex: 4,

    marginTop: -60,
  },
  itemPosicao: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 16,
  },
  imagem: {
    height: 72,
    width: 30,
  },
  bgImage: {},
  textPreco: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
  },
  textEstudio: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
  },
  textItemName: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
  },
});

export default DescricaoItem;
