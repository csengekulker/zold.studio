import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      root: {
        color: theme.palette.secondary.main,
      },
      apply: {
        marginRight: theme.spacing(3),
      },
      className: {
        width: '50px',
        backgroundColor: 'red',
        margin: theme.spacing(2)
    }
    };
  });

export default useStyles
