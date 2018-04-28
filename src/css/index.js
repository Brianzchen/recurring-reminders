import { StyleSheet } from 'aphrodite';

export const {
  maxHeight,
  userSelectNone,
} = StyleSheet.create({
  maxHeight: {
    height: '100%',
  },
  userSelectNone: {
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
  },
});
