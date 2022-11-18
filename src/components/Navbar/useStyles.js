import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      link: {
        textDecoration: 'none'
      },
      box: {
        flexGrow: 1
      },
      appbar: {
        backgroundColor: theme.palette.secondary.main
      }
    };
  });

export default useStyles
