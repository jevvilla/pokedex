import { StyleSheet } from 'react-native';

import { colors, headerTitle, sizes } from '../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    ...headerTitle,
  },
  logoutIcon: {
    marginRight: sizes.base,
  },
  searchSection: {
    paddingHorizontal: sizes.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    paddingHorizontal: sizes.base,
    borderRadius: sizes.radius,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
