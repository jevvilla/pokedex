import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import * as routes from './routes';

const switchNavigator = createSwitchNavigator(
  {
    [routes.SWITCH_AUTH]: AuthStack,
    [routes.SWITCH_APP]: AppStack,
  },
  {
    initialRouteName: routes.SWITCH_LOGIN,
  },
);

export default createAppContainer(switchNavigator);
