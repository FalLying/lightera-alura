import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import Cabecalho from '../components/Cabecalho';

import {DATA} from '../../utils/data';
import Card from '../components/Card';

const ListaProdutos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Card {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Cabecalho />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});

export default ListaProdutos;
