import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from './store/features/UserSlice';
import { RootState, AppDispatch } from './store/store';
import { useSnackbar, closeSnackbar } from 'notistack';
import { Button } from '@mui/material';


function App() {
  const username = useSelector((state: RootState) => state.user.username);
  const { enqueueSnackbar, } = useSnackbar();
  const dispatch = useDispatch<AppDispatch>();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  };
  closeSnackbar();

  return (
    <div>
      <div>
        Username: {username}
      </div>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter username" />
      <Button
        sx={{
          bgcolor: 'secondary.main',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
        onClick={() => enqueueSnackbar('That was easy!!')}>
        Show snackbar
      </Button>
    </div>
  );
}

export default App;
