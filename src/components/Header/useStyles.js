import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      box: {
        backgroundColor: theme.palette.primary.light
      },
      text: {
        color: theme.palette.secondary.dark
      },
      button: {
        color: theme.palette.secondary.dark
      }
    };
  });

export default useStyles
