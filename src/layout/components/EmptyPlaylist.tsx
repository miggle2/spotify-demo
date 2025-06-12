import React from 'react';
import { Box, Button, Card, Typography, styled } from '@mui/material';
import { getSpotifyAuthUrl } from '../../utils/auth';
import { createPlaylist } from '../../apis/playlistApi';
import useCreatePlaylist from '../../hooks/useCreatePlaylist';


const EmptyPlaylistCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '20px',
  borderRadius: '8px',

}));

const CreatePlaylistButton = styled(Button)(({ theme }) => ({
  maginTop: "20px",
  fontWeight: "700",
}));


const EmptyPlaylist = () => {
  const { mutate: createPlaylist } = useCreatePlaylist();
  const handleCreatePlaylist = () => {
      if(!localStorage.getItem("access_token")){
        getSpotifyAuthUrl()
      }else{
        createPlaylist({ name: "나의 플레이 리스트" })
      }
    }

  return (
    <EmptyPlaylistCard>
      <Typography variant="h2" fontWeight={700}>
        Create your first playlist
      </Typography>
      <Typography variant="body2">
        It's easy, we'll help you
      </Typography>
      <CreatePlaylistButton variant="contained" color="secondary" onClick={handleCreatePlaylist}>
        Create playlist
      </CreatePlaylistButton>
    </EmptyPlaylistCard>
  );
};

export default EmptyPlaylist;
