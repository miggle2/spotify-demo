import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton, styled, Typography } from '@mui/material';
import useCreatePlaylist from '../../hooks/useCreatePlaylist';

const Head = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "8px",
  justifyContent: "space-between",
})

const GreenAddButton = styled(IconButton)(({ theme }) => ({
  color: '#1ed760', // 형광 초록
  padding: '6px 16px',
  borderRadius: '999px',
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: 'rgba(30, 215, 96, 0.1)', // 형광 초록 배경, 약간 투명
  },
}));


const LibraryHead = () => {
  const { mutate: createPlaylist } = useCreatePlaylist();
  const handleCreatePlaylist = () => {
    createPlaylist({ name: "나의 플레이 리스트" })
  }
  return (
    <div>
      <Head>
        <Box display="flex">
          <BookmarkIcon sx={{ marginRight: "20px" }} />
          <Typography variant="h2" fontWeight={700}>Your Library</Typography>
        </Box>
        <GreenAddButton onClick={handleCreatePlaylist}>
          <AddIcon />
        </GreenAddButton>
      </Head>
    </div>
  )
}

export default LibraryHead