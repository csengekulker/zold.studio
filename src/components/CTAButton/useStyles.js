import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      link: {
        textDecoration: 'none'
      },
      button: {
        width: '100%',
        backgroundColor: 'white',

      }
    };
  });

export default useStyles
