import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      container: {
        backgroundColor: theme.palette.secondary.light,
      },
      label: {
        textAlign: 'center',
      },
      section: {
        paddingBottom: '30px',
        backgroundColor: theme.palette.primary.dark
      }
    };
  });

export default useStyles
