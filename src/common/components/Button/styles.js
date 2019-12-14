import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../styles';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sizes.base * 1.75,
    paddingVertical: sizes.base,
    borderRadius: sizes.radius,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  primary: {
    backgroundColor: colors.accent,
    paddingHorizontal: sizes.base * 2.5,
  },
});
