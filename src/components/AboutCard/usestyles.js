import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      card: {
        margin: '30px',
        maxWidth: 300,
        backgroundColor: theme.palette.secondary.light,
        textAlign: 'center',
        boxShadow: 'none'
      },
      cardmedia: {
        width: '150px',
        height: '150px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    };
  });

export default useStyles
