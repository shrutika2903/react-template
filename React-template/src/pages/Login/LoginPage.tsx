import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';


type LoginProps = {
    userName: string;
    password: string;
}

const LoginPage = (props: LoginProps) => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [passWordError, setPasswordError] = useState('');


    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (userName.length < 6) {
            setUserNameError('Username should be at least 6 characters long');
            return;
        }

        if (password.length < 8) {
            setPasswordError('Password should be 8 characters long');
            return;
        }
        setUserNameError('');
        setPasswordError('');


    };

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

                            <TextField
                                label="Username"
                                value={props.userName}
                                onChange={(e) => setUsername(e.target.value)}
                                error={Boolean(userNameError)}
                                helperText={userNameError}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', margin: '50px', justifyContent: 'center' }}>

                            <TextField
                                label="Password"
                                type="password"
                                value={props.password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={Boolean(passWordError)}
                                helperText={passWordError}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
export default LoginPage;

