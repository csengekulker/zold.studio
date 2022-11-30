import { makeStyles } from 'tss-react/mui';

// in TS include <void, 'child' | 'small'>

const useStyles = makeStyles()((theme) => {
    return {
        mapcontainer: {
            width: '50%',
            height: '30vh',
            borderRadius: '20px',
            boxShadow: '10px 10px'
        }
    };
});

export default useStyles
