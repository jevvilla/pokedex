import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { logout } from '../../common/tools/user';
import { IconButton } from '../../common/components';
import { colors } from '../../common/styles';
import * as strings from '../../common/strings';
import { SWITCH_AUTH } from '../../navigation/routes';

import styles from './styles';

const Home = props => {
  useEffect(() => {
    const { navigation } = props;
    navigation.setParams({ logoutAction });
  }, []);

  const logoutAction = async () => {
    const { navigation } = props;

    try {
      await logout();
      navigation.navigate(SWITCH_AUTH);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
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
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
