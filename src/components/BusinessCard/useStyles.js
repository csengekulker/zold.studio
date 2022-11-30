import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      cardmedia: {
        width: '150px',
        height: '150px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      businesscard: {
        margin: '30px',
        maxWidth: '80%',
        minWidth: '60%',
        backgroundColor: theme.palette.primary.light,
        alignItems: 'center',
        boxShadow: 'none'
      }
    };
  });

export default useStyles
