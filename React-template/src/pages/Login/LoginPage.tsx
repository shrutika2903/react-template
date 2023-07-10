//Import Statements
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';

const LoginPage = () => {
    // Setting up a state variable and its setter function
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [passWordError, setPasswordError] = useState('');

    //Function to handle login form submission
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        //Validation for 'username' field 
        if (userName.length < 6) {
            setUserNameError('Username should be at least 6 characters long');
            return; //Exiting the function if there is error
        }
        //Validation for 'password' field
        if (password.length < 8) {
            setPasswordError('Password should be 8 characters long');
            return;
        }
        // Resetting the username & password error message if there is no error
        setUserNameError('');
        setPasswordError('');
    };
    //return statement

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
                width: '100%',
                "& > :not(style)": {
                    m: 1,
                    width: 500,
                    height: 400
                }
            }}>
                <Paper elevation={10} >
                    <form onSubmit={handleLogin}>
                        <Box sx={{ display: 'flex', margin: '50px', justifyContent: 'center' }}>
                            {/* Text Input for Username & Password */}
                            <TextField
                                label="Username"
                                placeholder='Username'
                                onChange={(e) => setUserName(e.target.value)}
                                error={Boolean(userNameError)}
                                helperText={userNameError}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', margin: '50px', justifyContent: 'center' }}>

                            <TextField
                                label="Password"
                                type="Password"
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                error={Boolean(passWordError)}
                                helperText={passWordError}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            {/* Login Button */}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ width: '150px', height: '48px', fontSize: '1.2rem' }}

                            >
                                Login
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </>
    )
};
export default LoginPage; //export statement

