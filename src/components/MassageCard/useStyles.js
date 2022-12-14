import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      box: {
        backgroundColor: 'white',
        marginBottom: '20px',
      },
      info: {
        minWidth: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      cardmedia: {
        width: '90%',
        height: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    };
  });

export default useStyles
