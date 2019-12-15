import { StyleSheet } from 'react-native';

import { colors, headerTitle, sizes } from '../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  headerTitle: {
    ...headerTitle,
  },
  headerIcon: {
    marginHorizontal: sizes.base,
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: colors.light,
  },
  infoSection: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: sizes.base * 4,
    // backgroundColor: colors.light,
    alignItems: 'flex-start',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  label: {
    color: colors.red,
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 20,
  },
  infoLabel: {
    color: colors.dark,
  },
});
