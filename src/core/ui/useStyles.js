import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
        // use CSS in JS
      container: {
        backgroundColor: theme.palette.primary.light
      },
      label: {

      },
      divider: {
        
      }
    };
  });

export default useStyles
