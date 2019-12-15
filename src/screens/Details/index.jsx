import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import { logout } from '../../common/tools/user';
import { IconButton } from '../../common/components';
import { colors } from '../../common/styles';
import { SWITCH_AUTH } from '../../navigation/routes';

import styles from './styles';

const Details = props => {
  const { navigation } = props;
  const {
    item: {
      name,
      id,
      weight,
      types,
      // eslint-disable-next-line camelcase
      sprites: { front_default },
    },
  } = navigation.state.params;

  useEffect(() => {
    navigation.setParams({ logoutAction, pokemonName: name });
  }, []);

  const logoutAction = async () => {
    try {
      await logout();
      navigation.navigate(SWITCH_AUTH);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: front_default }} style={styles.thumbnail} />
      <View style={styles.infoSection}>
        <View style={styles.row}>
          <Text style={styles.label}>Id:</Text>
          <Text style={[styles.label, styles.infoLabel]}>{id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Weight:</Text>
          <Text style={[styles.label, styles.infoLabel]}>{weight}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Types:</Text>
          {types.map(item => {
            return (
              <Text key={item.type.name} style={[styles.label, styles.infoLabel]}>
                {item.type.name}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

Details.navigationOptions = ({ navigation }) => {
  const pokemonName = navigation.getParam('pokemonName', () => {});
  const logoutAction = navigation.getParam('logoutAction', () => {});

  return {
    headerTitle: <Text style={styles.headerTitle}>{pokemonName}</Text>,
    headerLeft: (
      <IconButton
        style={styles.headerIcon}
        name="arrowleft"
        color={colors.red}
        onPress={() => navigation.goBack()}
      />
    ),
    headerRight: (
      <IconButton
        style={styles.headerIcon}
        name="logout"
        color={colors.red}
        onPress={logoutAction}
      />
    ),
  };
};

Details.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        item: PropTypes.shape({
          name: PropTypes.string,
          id: PropTypes.number,
          weight: PropTypes.number,
          sprites: PropTypes.shape({
            front_default: PropTypes.string,
          }).isRequired,
          types: PropTypes.arrayOf(
            PropTypes.shape({
              type: PropTypes.shape({
                name: PropTypes.string,
              }),
            }),
          ).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Details;
