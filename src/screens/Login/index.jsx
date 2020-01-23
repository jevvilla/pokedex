import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import validateJs from 'validate.js';

import validations from './validation';
import { login } from '../../common/tools/user';
import { Button } from '../../common/components';
import * as routes from '../../navigation/routes';
import * as strings from '../../common/strings';

import styles from './styles';

const Login = props => {
  const [credentials, setCredentials] = useState({});
  const [errors, setErrors] = useState({});

  const onChangeTextInputHandler = (key, value) => setCredentials({ ...credentials, [key]: value });

  const onLogin = async () => {
    if (isFormValid(credentials)) {
      try {
        const user = await login(credentials);
        if (user) {
          return goToHome();
        }
        return setErrors({ login: strings.NOT_EXISTING_USER });
      } catch (err) {
        setErrors({ login: strings.LOGIN_ERROR });
      }
    }
  };

  const isFormValid = fields => {
    const formErrors = validateJs(fields, validations);
    if (formErrors) {
      setErrors(formErrors);
      return false;
    }
    setErrors({});
    return true;
  };

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
      <View style={styles.form}>
        <Text>Login</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder={strings.PLACEHOLDER_EMAIL}
            value={credentials.email}
            autoCapitalize="none"
            textContentType="emailAddress"
            onChangeText={value => onChangeTextInputHandler('email', value)}
          />
          <Text style={styles.errorLabel}>{errors?.email}</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder={strings.PLACEHOLDER_PASSWORD}
            secureTextEntry
            value={credentials.password}
            onChangeText={value => onChangeTextInputHandler('password', value)}
          />
          <Text style={styles.errorLabel}>{errors?.password}</Text>
        </View>
        <Button primary title={strings.LOGIN_BUTTON} onPress={onLogin} />
        <Text style={styles.errorLabel}>{errors?.login}</Text>
        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.registrationLabel}>{strings.CREATE_ACCOUNT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
