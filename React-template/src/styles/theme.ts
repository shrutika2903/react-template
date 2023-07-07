import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    //you can set color
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});

export default theme;