import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
        // use CSS in JS
      container: {
        backgroundColor: 'grey'
      },
      label: {

      },
      divider: {
        backgroundColor: 'yellowgreen'
      }
    };
  });

export default useStyles
