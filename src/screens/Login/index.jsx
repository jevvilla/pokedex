import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as routes from '../../navigation/routes';

const Login = props => {
  const goToRegister = () => {
    const { navigation } = props;

    navigation.navigate(routes.REGISTER);
  };

  const goToHome = () => {
    const { navigation } = props;

    navigation.navigate(routes.HOME);
  };

  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={goToRegister}>
        <Text>go to register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToHome}>
        <Text>go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
