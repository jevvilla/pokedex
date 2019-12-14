import { createStackNavigator } from 'react-navigation-stack';

import { Login, Register } from '../screens';
import * as routes from './routes';

export default createStackNavigator(
  {
    [routes.LOGIN]: { screen: Login },
    [routes.REGISTER]: { screen: Register },
  },
  {
    headerMode: 'none',
  },
);
