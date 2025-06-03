import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  padding: '16px',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '300px',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}));

const WhiteButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#000',
  width: '50%',
  fontWeight: 'bold',
  borderRadius: '999px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}));

const EmptyPlaylist = () => {
  return (
    <Wrapper>
      <Typography variant="h6" fontWeight={700}>
        Create your first playlist
      </Typography>
      <Typography variant="body2" color="#b3b3b3">
        It's easy, we'll help you
      </Typography>
      <WhiteButton>
        Create playlist
      </WhiteButton>
    </Wrapper>
  );
};

export default EmptyPlaylist;
