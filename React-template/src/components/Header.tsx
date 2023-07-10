//Import Statements for Material-UI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//Props
type HeaderProps = {
  title: string;
  date: string;
}

const Header = (props: HeaderProps) => {
  const { title, date } = props; //Destructuring title and date from props

  //return statement
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}  {/* Displaying the value of the title */}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {date}   {/* Displaying the value of the date */}
      </Typography>
    </Box>
  );
};

export default Header;
