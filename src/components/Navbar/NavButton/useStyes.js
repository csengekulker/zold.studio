import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      navbutton: {
        margin: '10px',
        color: 'blue',
        backgroundColor: 'cyan'
      }
    };
  });

export default useStyles
