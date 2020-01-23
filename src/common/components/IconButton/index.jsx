import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { colors } from '../../styles';

import styles from './styles';

const IconButton = props => {
  const { onPress, style: cstyle, iconSize, name, color } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon style={[styles.headerActions, cstyle]} size={iconSize} name={name} color={color} />
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.arrayOf(ViewPropTypes.style), ViewPropTypes.style]),
  iconSize: PropTypes.number,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

IconButton.defaultProps = {
  style: {},
  iconSize: 24,
  color: colors.black,
};

export default IconButton;
