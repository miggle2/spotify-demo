import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, styled, Typography } from '@mui/material';
import { NavLink } from 'react-router';

const NavList = styled("ul")({
  listStyle:"none",
  padding:0,
  margin:0,
})

const StyledNavList = styled(NavLink)(({theme})=>({
  textDecoration:"none",
  display:"flex",
  alignItems:"center",
  gap:"20px",
  color:theme.palette.text.secondary,
}));

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
  return (
    <div>
        <NavList>
         <StyledNavList to="/playlist/:id">
         <BookmarkIcon/>
         <Typography variant="h2" fontWeight={700}>Your Library</Typography>
         <GreenAddButton>
         <AddIcon />
         </GreenAddButton>
         </StyledNavList>
        </NavList>
    </div>
  )
}

export default LibraryHead