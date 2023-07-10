//Import Statements
import { useState, useEffect } from 'react';
import MyComponent from './components/Header';
import { LoginPage } from './pages';
import Box from '@mui/material/Box';


const App = () => {
  // Setting up a state variable and its setter function
  const [title, setTitle] = useState("Title");
  const [date, setDate] = useState("07th July, 2023");

  useEffect(() => {
    // Updating the title & date state with the initial value
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
        <MyComponent title={title} date={date} /> {/* Rendering the MyComponent with the title and date props */}
      </Box>
      <LoginPage /> {/* Rendering the LoginPage component */}
    </>
  );
};

export default App; //export statement