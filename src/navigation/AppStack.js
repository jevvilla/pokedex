import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home } from '../screens';
import { defaultHeader } from '../common/styles';
import * as routes from './routes';

const Navigator = createStackNavigator(
  {
    [routes.HOME]: {
      screen: Home,
    },
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: defaultHeader,
    },
  },
);

export default createAppContainer(Navigator);
