import { StyleSheet } from 'react-native';

import { colors, headerTitle, sizes } from '../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flatlist: { paddingHorizontal: 16 },
  headerTitle: {
    ...headerTitle,
  },
  logoutIcon: {
    marginRight: sizes.base,
  },
});
