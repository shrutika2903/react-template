//Import Statements
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
    //you can set color
    palette: {
        primary: {
            main: green[500], // Setting the main primary color
        },
        secondary: {
            main: '#11cb5f',  // Setting the main secondary color to the custom color
        },
    },
});

export default theme;