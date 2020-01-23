import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, ViewPropTypes, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { colors } from '../../../../common/styles';

import styles from './styles';

const PokeCard = props => {
  const {
    name,
    // eslint-disable-next-line camelcase
    sprites: { front_default },
    style: cstyles = {},
    types,
    onPokeCardPress,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, cstyles]}
      activeOpacity={0.7}
      onPress={onPokeCardPress}
    >
      <View style={styles.row}>
        <Image source={{ uri: front_default }} style={styles.thumbnail} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          {types.map(item => {
            return (
              <Text key={item.type.name} numberOfLines={2} style={styles.type}>
                {item.type.name}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={styles.icon}>
        <Icon size={20} name="chevron-right" color={colors.gray} />
      </View>
    </TouchableOpacity>
  );
};

PokeCard.propTypes = {
  name: PropTypes.string.isRequired,
  sprites: PropTypes.shape({
    front_default: PropTypes.string.isRequired,
  }).isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  ).isRequired,
  style: PropTypes.oneOfType([PropTypes.arrayOf(ViewPropTypes.style), ViewPropTypes.style])
    .isRequired,
  onPokeCardPress: PropTypes.func.isRequired,
};

export default PokeCard;
