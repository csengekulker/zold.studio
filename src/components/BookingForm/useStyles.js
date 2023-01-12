import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      form: {
        borderColor: 'black',
        borderWidth: '3px',
        borderStyle: 'solid'
      },
      step: {
        padding: '5px',
        minWidth: '25%',
        maxWidth: '30%',
        border: 'black 3px solid',
      }
    };
  });

export default useStyles
