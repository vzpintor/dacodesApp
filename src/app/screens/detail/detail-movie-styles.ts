import {Dimensions, StyleSheet} from 'react-native';
import {spacing} from '@utils/spacing';

export const ITEM_WIDTH = Dimensions.get('window').width;
export const SIZE = ITEM_WIDTH / 2 - 10;
export const HEIGHT = SIZE * 2 - 180;

export const detailStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: HEIGHT,
  },
  titleText: {
    paddingHorizontal: spacing[2],
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  text: {
    paddingHorizontal: spacing[2],
    color: '#000',
    fontSize: 16,
  },
  title: {
    paddingHorizontal: spacing[2],
    color: '#000',
    paddingVertical: spacing[4],
    fontSize: 32,
  },
  item: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[2],
  },
});
