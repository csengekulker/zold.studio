import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      box: {
        backgroundColor: theme.palette.primary.light
      },
      text: {
        color: theme.palette.secondary.main
      },
      button: {
        backgroundColor: 'white'
      }
    };
  });

export default useStyles
