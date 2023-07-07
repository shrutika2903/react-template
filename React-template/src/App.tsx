import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MyComponent from './components/Header';

const App = () => {
  const [title, setTitle] = useState("Title");
  const [date, setDate] = useState("07th July, 2023");

  useEffect(() => {
    setTitle(title);
    setDate(date);
  }, []);

  return (
    <Box sx={{
      color: 'white',
      fontSize: '14px',
      backgroundColor: 'grey',
      padding: '10px',
      textAlign: 'center'
     }} >
      <MyComponent title={title} date={date} />
    </Box>
  );
};

export default App;