import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from '../../common/components';
import * as strings from '../../common/strings';

import styles from './styles';

const Register = props => {
  const [credentials, setCredentials] = useState({});

  const onChangeTextInputHandler = (key, value) => setCredentials({ ...credentials, [key]: value });

  const goBack = () => {
    const { navigation } = props;

    navigation.goBack();
  };

  const behavior = Platform.OS === 'android' ? 'height' : 'padding';

  return (
    <KeyboardAvoidingView style={styles.container} behavior={behavior} enabled>
      <View style={styles.form}>
        <Text>Register</Text>
        <TextInput
          style={styles.input}
          placeholder={strings.PLACEHOLDER_USERNAME}
          value={credentials.username}
          autoCorrect={false}
          textContentType="familyName"
          onChangeText={value => onChangeTextInputHandler('username', value)}
        />
        <TextInput
          style={styles.input}
          placeholder={strings.PLACEHOLDER_EMAIL}
          value={credentials.email}
          textContentType="emailAddress"
          onChangeText={value => onChangeTextInputHandler('email', value)}
        />
        <TextInput
          style={styles.input}
          placeholder={strings.PLACEHOLDER_PASSWORD}
          secureTextEntry
          value={credentials.password}
          onChangeText={value => onChangeTextInputHandler('password', value)}
        />
        <TextInput
          style={styles.input}
          placeholder={strings.PLACEHOLDER_REPEAT_PASSWORD}
          secureTextEntry
          value={credentials.repeat_password}
          onChangeText={value => onChangeTextInputHandler('repeat_password', value)}
        />
        <View style={styles.buttonsSection}>
          <Button title="Cancel" onPress={goBack} />
          <Button primary title="Sign Up" onPress={() => {}} />
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
