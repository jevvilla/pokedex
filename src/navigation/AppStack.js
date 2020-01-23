import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home, Details } from '../screens';
import { defaultHeader } from '../common/styles';
import * as routes from './routes';

const Navigator = createStackNavigator(
  {
    [routes.HOME]: {
      screen: Home,
    },
    [routes.DETAILS]: {
      screen: Details,
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
