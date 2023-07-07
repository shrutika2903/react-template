import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type HeaderProps = {
  title: string;
  date: string;
}

const Header = (props: HeaderProps) => {
  const { title, date } = props;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {date}
      </Typography>
    </Box>
  );
};

export default Header;
