import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate, Link } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="">
        Yuta-portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setregisterPassword] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      alert(
        '正しく入力してください。パスワードは６文字以上の英数字を入力してください。'
      );
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  新規登録
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="メールアドレス"
                        name="email"
                        autoComplete="email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="パスワード"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={registerPassword}
                        onChange={(e) => setregisterPassword(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    登録する
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to={`/sign-in/`}>ログインはこちらから</Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </ThemeProvider>
        </>
      )}
    </>
  );
}
