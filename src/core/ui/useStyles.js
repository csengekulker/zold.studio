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
        marginBottom: '30px'
      }
    };
  });

export default useStyles
