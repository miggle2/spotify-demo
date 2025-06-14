import { Button, styled } from '@mui/material';
import React from 'react'
import { getSpotifyAuthUrl } from '../../utils/auth';

const LoginActionButton = styled(Button)(({ theme }) => ({
    maginTop: "20px",
    fontWeight: "700",
}));

const handleLogin = () => {
    if(!localStorage.getItem("access_token")){
        getSpotifyAuthUrl()
    }
}

const LoginButton = () => {
    return (
        <LoginActionButton variant="contained" color="secondary" onClick={handleLogin}>
            Login
        </LoginActionButton>
    )
}

export default LoginButton