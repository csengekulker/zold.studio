import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      navbutton: {
        margin: '10px',
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.secondary.dark
      }
    };
  });

export default useStyles
