import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      form: {
        borderColor: 'black',
        borderWidth: '3px',
        borderStyle: 'solid'
      }
    };
  });

export default useStyles
