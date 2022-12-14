import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

// TODO: background, colors matching

const useStyles = makeStyles()((theme) => {
    return {
      container: {
      },
      label: {
        textAlign: 'center',
      },
      section: {
        paddingBottom: '30px',
        backgroundColor: theme.palette.secondary.dark,
        borderColor: 'black',
        borderWidth: '3px',
        borderStyle: 'solid'
      }
    };
  });

export default useStyles
