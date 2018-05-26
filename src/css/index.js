import { StyleSheet } from 'aphrodite';

import { secondary } from 'lib/colors';

const boxShadow = (spread = 0) => `0px 0px 20px ${spread}px ${secondary}`;

const focusAnimation = {
  '0%': {
    boxShadow: boxShadow(),
  },
  '50%': {
    boxShadow: boxShadow(5),
  },
  '100%': {
    boxShadow: boxShadow(),
  },
};

export const {
  focus,
  maxHeight,
  userSelectNone,
  standardFontSize,
} = StyleSheet.create({
  focus: {
    ':focus': {
      animationName: [focusAnimation],
      animationDuration: '3s',
      animationIterationCount: 'infinite',
    },
  },
  maxHeight: {
    height: '100%',
  },
  userSelectNone: {
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
  },
  standardFontSize: {
    fontSize: '14px',
  },
});
