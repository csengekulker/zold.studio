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
        backgroundColor: 'red'
      }
    };
  });

export default useStyles
