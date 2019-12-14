import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: sizes.base * 2,
  },
  form: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    paddingHorizontal: sizes.base,
    borderRadius: sizes.radius,
    borderWidth: StyleSheet.hairlineWidth,
  },
  buttonsSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: sizes.base,
  },
  errorLabel: {
    color: colors.red,
    fontSize: 12,
  },
  row: {
    width: '100%',
    marginVertical: 8,
  },
});
