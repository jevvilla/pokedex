import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import validateJs from 'validate.js';

import { register } from '../../common/tools/user';
import validations from './validations';
import { Button } from '../../common/components';
import * as strings from '../../common/strings';

import styles from './styles';

const Register = props => {
  const [credentials, setCredentials] = useState({});
  const [errors, setErrors] = useState({});

  const onChangeTextInputHandler = (key, value) => setCredentials({ ...credentials, [key]: value });

  const goBack = () => {
    const { navigation } = props;

    navigation.goBack();
  };

  const onSignUp = async () => {
    if (isFormValid(credentials)) {
      await register(credentials);
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

  const behavior = Platform.OS === 'android' ? 'height' : 'padding';

  return (
    <KeyboardAvoidingView style={styles.container} behavior={behavior} enabled>
      <View style={styles.form}>
        <Text>Register</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder={strings.PLACEHOLDER_USERNAME}
            value={credentials.username}
            autoCorrect={false}
            textContentType="familyName"
            onChangeText={value => onChangeTextInputHandler('username', value)}
          />
          <Text style={styles.errorLabel}>{errors?.username}</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder={strings.PLACEHOLDER_EMAIL}
            value={credentials.email}
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
          <Text style={styles.errorLabel}>{errors?.confirmPassword}</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder={strings.PLACEHOLDER_REPEAT_PASSWORD}
            secureTextEntry
            value={credentials.repeat_password}
            onChangeText={value => onChangeTextInputHandler('confirmPassword', value)}
          />
          <Text style={styles.errorLabel}>{errors?.confirmPassword}</Text>
        </View>
        <View style={styles.buttonsSection}>
          <Button title="Cancel" onPress={goBack} />
          <Button primary title="Sign Up" onPress={onSignUp} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

Register.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;
