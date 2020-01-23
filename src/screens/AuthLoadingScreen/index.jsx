import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { getLoggedUser } from '../../common/tools/user';
import { SWITCH_AUTH, SWITCH_APP } from '../../navigation/routes';
import { colors } from '../../common/styles';

import styles from './styles';

const AuthLoadinScreen = props => {
  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    const { navigation } = props;
    try {
      const session = await getLoggedUser();
      navigation.navigate(session ? SWITCH_APP : SWITCH_AUTH);
    } catch (err) {
      navigation.navigate(SWITCH_AUTH);
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={colors.accent} />
    </View>
  );
};

AuthLoadinScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default AuthLoadinScreen;
