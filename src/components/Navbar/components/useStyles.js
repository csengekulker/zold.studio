import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      navbutton: {
        margin: '10px',
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.secondary.dark
      },
      smallnavbutton: {
        width: '100%',
        height: '10vw',
        backgroundColor: theme.palette.secondary.main
      }
    };
  });

export default useStyles
