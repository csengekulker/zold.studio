import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      box: {
        backgroundColor: theme.palette.primary.main
      },
      text: {
        color: 'white'
      }
    };
  });

export default useStyles
