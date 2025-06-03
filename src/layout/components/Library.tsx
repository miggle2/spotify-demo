import React from 'react'
import EmptyPlaylist from './EmptyPlaylist'
import { Box, styled } from '@mui/material'

const ContentBox = styled(Box)(({theme})=>({
  borderRadius:"8px",
  backgroundColor:theme.palette.background.paper,
  color:theme.palette.text.primary,
  width:"100%",
  padding:"8px",
  marginBottom:"8px",
  marginRight:"8px",
}))

const Library = () => {
  return (
    <div>
        <ContentBox>
            <EmptyPlaylist/>
        </ContentBox>
    </div>
  )
}

export default Library