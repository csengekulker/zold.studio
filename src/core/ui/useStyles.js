import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
      container: {
        backgroundColor: theme.palette.secondary.light,
      },
      label: {
        textAlign: 'center',
      },
      card: {
        margin: '30px',
        maxWidth: 300,
        backgroundColor: theme.palette.primary.light,
        textAlign: 'center',
        boxShadow: 'none'
      },
      cardmedia: {
        width: '150px',
        height: '150px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      section: {
        marginBottom: '30px'
      },
      businesscard: {
        margin: '30px',
        maxWidth: '80%',
        minWidth: '60%',
        backgroundColor: theme.palette.primary.light,
        // textAlign: 'left',
        boxShadow: 'none'
      }
    };
  });

export default useStyles
