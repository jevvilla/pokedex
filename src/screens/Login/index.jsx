import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import * as routes from '../../navigation/routes';

import styles from './styles';

const Login = props => {
  const goToRegister = () => {
    const { navigation } = props;

    navigation.navigate(routes.REGISTER);
  };

  // eslint-disable-next-line no-unused-vars
  const goToHome = () => {
    const { navigation } = props;

    navigation.navigate(routes.HOME);
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity onPress={goToRegister}>
        <Text>go to register</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={goToHome}>
        <Text>go to Home</Text>
      </TouchableOpacity> */}
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
