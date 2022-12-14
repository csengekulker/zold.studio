import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      box: {
        backgroundColor: theme.palette.secondary.light,
        marginBottom: '20px',
      },
      image: {
        width: '100px', 
        height: '100px', 
        backgroundColor: 'white',
      },
      info: {
        maxWidth: '80%'
      },
      cardmedia: {
        width: '80%',
        height: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    };
  });

export default useStyles
