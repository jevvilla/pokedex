import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { logout } from '../../common/tools/user';
import { IconButton } from '../../common/components';
import { colors } from '../../common/styles';
import * as strings from '../../common/strings';
import { SWITCH_AUTH } from '../../navigation/routes';
import { getAllPokemon } from '../../common/api';
import PokeCardList from './components/PokeCardList';

import styles from './styles';

const Home = props => {
  const [fetchingPokemon, setFetchingPokemon] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { navigation } = props;
    navigation.setParams({ logoutAction });
    fetchPokemon();
  }, []);

  const logoutAction = async () => {
    const { navigation } = props;

    try {
      await logout();
      navigation.navigate(SWITCH_AUTH);
    } catch (err) {
      setError(err);
    }
  };

  const fetchPokemon = async () => {
    setFetchingPokemon(true);
    try {
      const pokemon = await getAllPokemon();
      setPokemons(pokemon);
    } catch (err) {
      setError(err);
    } finally {
      setFetchingPokemon(false);
    }
  };

  const renderPokemons = () => {
    if (fetchingPokemon) {
      return <ActivityIndicator size="small" />;
    }

    return <PokeCardList data={pokemons} onCardPress={() => {}} />;
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return <View style={styles.container}>{renderPokemons()}</View>;
};

Home.navigationOptions = ({ navigation }) => {
  const logoutAction = navigation.getParam('logoutAction', () => {});

  return {
    headerTitle: <Text style={styles.headerTitle}>{strings.HOME}</Text>,
    headerRight: (
      <IconButton
        style={styles.logoutIcon}
        name="logout"
        color={colors.red}
        onPress={logoutAction}
      />
    ),
  };
};

Home.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
