import { useState, useEffect } from 'react';
import MyComponent from './components/Header';
import { LoginPage } from './pages';
import Box from '@mui/material/Box';


const App = (userName: string, password: string) => {
  const [title, setTitle] = useState("Title");
  const [date, setDate] = useState("07th July, 2023");

  useEffect(() => {
    setTitle(title);
    setDate(date);
  }, []);

  return (
    <>
      <Box
        sx={{
          color: 'white',
          fontSize: '14px',
          backgroundColor: '#4caf50',
          padding: '10px',
          textAlign: 'center'
        }}>
        <MyComponent title={title} date={date} />
      </Box>

       
        <LoginPage userName={userName} password={password} />
    </>
  );
};

export default App;