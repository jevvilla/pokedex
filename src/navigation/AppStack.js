import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home } from '../screens';

import * as routes from './routes';

const Navigator = createStackNavigator({
  [routes.HOME]: {
    screen: Home,
  },
});

export default createAppContainer(Navigator);
