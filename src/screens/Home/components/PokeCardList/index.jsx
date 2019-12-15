import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

import PokeCard from '../PokeCard';

import styles from './styles';

const PokeCardList = props => {
  const { data: pokemons, onCardPress } = props;

  // eslint-disable-next-line react/prop-types
  const renderItem = ({ item }) => {
    return <PokeCard onPokeCardPress={() => onCardPress(item)} style={styles.card} {...item} />;
  };

  const keyExtractor = item => `${item.id}${item.name}`;

  return (
    <>
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<SafeAreaView forceInset={{ bottom: 'always' }} />}
      />
    </>
  );
};

PokeCardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onCardPress: PropTypes.func.isRequired,
};

export default PokeCardList;
