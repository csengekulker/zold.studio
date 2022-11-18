import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      box: {
        backgroundColor: 'green'
      },
      text: {
        color: 'white'
      }
    };
  });

export default useStyles
