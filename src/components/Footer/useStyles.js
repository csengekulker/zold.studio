import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      box: {
        flexGrow: 1,
        backgroundColor: 'green',
        textAlign: 'center',
        position: 'bottom'
      }
    };
  });

export default useStyles
