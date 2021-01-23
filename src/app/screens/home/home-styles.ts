import {Dimensions, StyleSheet} from 'react-native';
import {spacing} from '@utils/spacing';

export const ITEM_WIDTH = Dimensions.get('window').width;
export const SIZE = ITEM_WIDTH / 2 - 10;
export const HEIGHT = SIZE * 2 - 95;

export const homeStyles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    marginBottom: 30,
    marginTop: 10,
  },
  wrapperImageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    height: HEIGHT,
  },
  card: {
    width: SIZE,
    height: HEIGHT,
  },
  overlay: {
    position: 'absolute',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor: 'black',
    width: SIZE,
  },
  text: {
    fontWeight: 'bold',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    color: '#CCC',
    fontSize: 16,
  },
  overlayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  voteAverage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: 20,
    height: 20,
  },
});
